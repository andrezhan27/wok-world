import { restaurant } from './content.mjs';

const emptyLinks = { privacyPolicyUrl: null, termsAndConditionsUrl: null };

function publicUrl(value) {
  if (typeof value !== 'string') return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null;
  } catch {
    return null;
  }
}

export async function getRestaurantLegalLinks() {
  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!baseUrl || !publishableKey) return emptyLinks;

  try {
    const endpoint = new URL('/rest/v1/restaurants', baseUrl);
    endpoint.searchParams.set('slug', `eq.${restaurant.slug}`);
    endpoint.searchParams.set('select', 'privacy_policy_url,terms_and_conditions_url');
    endpoint.searchParams.set('limit', '1');

    const response = await fetch(endpoint, {
      headers: { apikey: publishableKey },
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return emptyLinks;
    const rows = await response.json();
    const row = Array.isArray(rows) ? rows[0] : null;

    return {
      privacyPolicyUrl: publicUrl(row?.privacy_policy_url),
      termsAndConditionsUrl: publicUrl(row?.terms_and_conditions_url),
    };
  } catch {
    return emptyLinks;
  }
}

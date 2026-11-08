import { HomeContent } from '../components/home-content';
import { Footer } from '../components/restaurant-info';
import { getRestaurantLegalLinks } from '../legal.mjs';

export default async function HomePage() {
  const legalLinks = await getRestaurantLegalLinks();
  return <HomeContent footer={<Footer {...legalLinks} />} />;
}

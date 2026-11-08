import { restaurant } from '../content.mjs';
import { LanguageProvider, SkipLink } from '../components/language';
import '../styles.css';

export const metadata = {
  title: {
    default: `${restaurant.name} · Buffet livre em ${restaurant.city}`,
    template: `%s · ${restaurant.name}`,
  },
  description: restaurant.description,
};

export const viewport = { themeColor: '#30251e' };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT" data-scroll-behavior="smooth">
      <head>
        <link rel="preload" href="/fonts/cormorant-garamond.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <LanguageProvider>
          <SkipLink />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

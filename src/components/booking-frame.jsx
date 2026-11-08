'use client';

import { restaurant } from '../content.mjs';
import { useLanguage } from './language';

export function BookingFrame() {
  const { language, t } = useLanguage();

  return (
    <main id="main" className="reservation-shell">
      <h1 className="sr-only">{t('Reservar mesa no')} {restaurant.name}</h1>
      <iframe className="reservation-widget" loading="eager"
        src={`${restaurant.reservationWidgetUrl}?lang=${language}`} title={`${restaurant.name} · ${t('Reservas')}`} />
    </main>
  );
}

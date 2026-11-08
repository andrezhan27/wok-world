'use client';

import { useLanguage } from './language';
import Link from 'next/link';
import { navigation, restaurant } from '../content.mjs';
import { imageUrl } from './photo';
import { Wordmark } from './wordmark';

export function ReserveLink({ className = '', reservation = false, compact = false, onClick }) {
  const { t, language } = useLanguage();
  if (reservation) {
    return (
      <a className={`button ${className}`} href={`${restaurant.reservationWidgetUrl}?lang=${language}`} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {t('Abrir formulário')}
      </a>
    );
  }

  return (
    <Link className={`button ${className}`} href={restaurant.reservationPath} aria-label={compact ? t('Reservar mesa') : undefined} onClick={onClick}>
      {compact ? (
        <>
          <span className="nav-book-full">{t('Reservar mesa')}</span>
          <span className="nav-book-short">{t('Reservar')}</span>
        </>
      ) : t('Reservar mesa')}
    </Link>
  );
}

export function Brand({ className, reservation = false }) {
  const { t } = useLanguage();
  const Tag = reservation ? Link : 'a';
  return (
    <Tag className={`brand ${className}`} href={reservation ? '/#inicio' : '#inicio'} aria-label={`${restaurant.name} · ${t('Início')}`}>
      <img src={imageUrl(restaurant.images.logo, '-192')} alt="" width={48} height={19} />
      <span><Wordmark /><small>{restaurant.city}</small></span>
    </Tag>
  );
}

export function NavLinks({ reservation = false, activeSection, onClick }) {
  const { t } = useLanguage();
  const Tag = reservation ? Link : 'a';
  return navigation.map(({ id, label }) => (
    <Tag key={id} href={`${reservation ? '/' : ''}#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={onClick}>
      {t(label)}
    </Tag>
  ));
}

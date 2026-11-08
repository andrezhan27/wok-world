'use client';

import { useLanguage } from './language';
import { interiorPhotos, restaurant } from '../content.mjs';
import { BuffetSection } from './buffet';
import { Icon } from './icon';
import { HomeMotion } from './motion';
import { imageUrl, Photo } from './photo';
import { SiteHeader } from './site-header';
import { ReserveLink } from './site-links';
import { InfoSection } from './restaurant-info';
import { ReviewsSection } from './reviews';
import { Wordmark } from './wordmark';

function Hero() {
  const { t } = useLanguage();
  const { heroMobile, heroDesktop, logo } = restaurant.images;
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <picture className="hero-photo">
        <source media="(max-width: 640px) and (orientation: portrait)" srcSet={`${imageUrl(heroMobile, '-540')} 540w, ${imageUrl(heroMobile)} 941w`} sizes="100vw" />
        <img src={imageUrl(heroDesktop)} srcSet={`${imageUrl(heroDesktop, '-1100')} 1100w, ${imageUrl(heroDesktop)} 1672w`}
          width={1672} height={941} sizes="100vw" fetchPriority="high" alt="" />
      </picture>
      <div className="hero-overlay" />
      <div className="hero-content">
        <img className="hero-mark" src={imageUrl(logo, '-192')} alt="" width={90} height={36} />
        <h1 id="hero-title">
          <span className="sr-only">{restaurant.name}</span>
          <Wordmark />
        </h1>
        <p className="hero-description">{t('Sushi, teppanyaki e muito para partilhar.')}</p>
        <ReserveLink className="hero-book" />
      </div>
      <svg className="hero-wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 35C250 65 455 65 720 35S1160 5 1440 35V70H0Z" />
      </svg>
    </section>
  );
}

function SpaceSection() {
  const { t } = useLanguage();
  return (
    <section id="espaco" className="space-section section" aria-labelledby="space-title">
      <div className="container">
        <div className="space-intro" data-reveal>
          <div>
            <p className="eyebrow"><span className="rule" /> {t('O nosso espaço')}</p>
            <h2 id="space-title">{t('À volta')} <em>{t('da mesa.')}</em></h2>
          </div>
          <p>{t('Uma sala luminosa, mesas para reunir amigos e família e um buffet que convida a circular e a descobrir.')}</p>
        </div>
        <div className="space-grid">
          {interiorPhotos.map(photo => (
            <Photo key={photo.file} photo={photo} sizes="(max-width: 760px) 46vw, (max-width: 1440px) 23vw, 320px" />
          ))}
        </div>
        <div className="space-caption"><span>Wok World</span><span>Sintra, Portugal</span></div>
      </div>
    </section>
  );
}

function VisitSection() {
  const { t, language } = useLanguage();
  return (
    <section className="visit-section section" aria-labelledby="visit-title">
      <div className="container visit-grid">
        <div className="visit-book" data-reveal>
          <Photo photo={{ file: restaurant.images.reservation, position: '50% 60%' }}
            sizes="(max-width: 760px) 95vw, 50vw" className="visit-photo" decorative />
          <div className="visit-content">
            <p className="eyebrow"><span className="rule" /> {t('À sua espera em Sintra')}</p>
            <h2 id="visit-title">{t('A sua mesa')} <em>{t('espera por si.')}</em></h2>
            <p>{t('Escolha o dia e venha partilhar uma refeição connosco.')}</p>
            <ReserveLink />
          </div>
        </div>
        <div className="visit-map">
          <iframe title={t('Localização do Wok World no Google Maps')} src={restaurant.mapEmbed.replaceAll('!1sen!2spt', `!1s${language}!2spt`)} width={600} height={450}
            loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <div className="map-caption">
            <Icon name="pin" size={21} />
            <address>{restaurant.address[0]}<br />{restaurant.address[1]}</address>
            <a href={restaurant.mapUrl} target="_blank" rel="noopener noreferrer">{t('Como chegar')} <Icon name="external" size={15} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeContent({ footer }) {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <BuffetSection />
        <SpaceSection />
        <InfoSection />
        <ReviewsSection />
        <VisitSection />
      </main>
      {footer}
      <HomeMotion />
    </>
  );
}

'use client';

import { useLanguage } from './language';
import { restaurant } from '../content.mjs';
import { Icon } from './icon';
import { Brand, NavLinks } from './site-links';

function Address() {
  return (
    <address>
      <a href={restaurant.mapUrl} target="_blank" rel="noopener noreferrer">
        {restaurant.address[0]}<br />{restaurant.address[1]}
      </a>
    </address>
  );
}

function Hours() {
  const { t } = useLanguage();
  return <p className="hours"><strong>{t(restaurant.hoursDays)}</strong><br />{restaurant.hours.join(' · ')}</p>;
}

function SocialLinks() {
  return restaurant.social.map(social => (
    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
      <Icon name={social.icon} size={16} /><span>{social.name}</span><Icon name="external" size={13} />
    </a>
  ));
}

export function InfoSection() {
  const { t } = useLanguage();
  return (
    <section id="informacoes" className="info-section section" aria-labelledby="info-title">
      <div className="container">
        <div className="space-intro">
          <div>
            <p className="eyebrow"><span className="rule" /> {t('Informações')}</p>
            <h2 id="info-title">{t('Visite-nos')} <em>{t('em Sintra.')}</em></h2>
          </div>
        </div>
        <dl className="info-grid">
          <div className="info-item">
            <dt><Icon name="pin" size={20} /> {t('Morada')}</dt>
            <dd><Address /></dd>
            <dd><a className="info-directions" href={restaurant.mapUrl} target="_blank" rel="noopener noreferrer">{t('Como chegar')} <Icon name="external" size={13} /></a></dd>
          </div>
          <div className="info-item">
            <dt><Icon name="clock" size={20} /> {t('Horário')}</dt>
            <dd><Hours /></dd>
          </div>
          <div className="info-item">
            <dt><Icon name="phone" size={20} /> {t('Telefone')}</dt>
            <dd><a href={restaurant.phoneHref}>{restaurant.phone}</a></dd>
          </div>
          <div className="info-item">
            <dt><Icon name="share" size={20} /> {t('Redes sociais')}</dt>
            <dd className="info-social"><SocialLinks /></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export function Footer({ privacyPolicyUrl, termsAndConditionsUrl }) {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Brand className="footer-brand" />
            <p className="footer-tagline">{t('Sushi, teppanyaki e buffet livre em Sintra.')}</p>
          </div>
          <div>
            <h2 className="eyebrow">{t('Explorar')}</h2>
            <nav className="footer-nav" aria-label={t('Navegação no rodapé')}><NavLinks /></nav>
          </div>
          <div>
            <h2 className="eyebrow">{t('Visite-nos')}</h2>
            <Address />
            <Hours />
            <a href={restaurant.phoneHref}>{restaurant.phone}</a>
          </div>
          <aside className="social-card" aria-labelledby="social-title">
            <h2 className="eyebrow" id="social-title">{t('Siga-nos')}</h2>
            <SocialLinks />
          </aside>
        </div>
        <div className="footer-bottom">
          <p lang="en">© 2026 {restaurant.name}. Powered by <a href="https://www.intelis.pt/" target="_blank" rel="noopener noreferrer">Intelis</a>. All rights reserved.</p>
          <nav className="footer-legal" aria-label={t('Informações legais')}>
            <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener noreferrer">{t('Livro de Reclamações')}</a>
            {termsAndConditionsUrl && <a href={termsAndConditionsUrl} target="_blank" rel="noopener noreferrer">{t('Termos e Condições')}</a>}
            {privacyPolicyUrl && <a href={privacyPolicyUrl} target="_blank" rel="noopener noreferrer">{t('Política de Privacidade')}</a>}
          </nav>
        </div>
      </div>
    </footer>
  );
}

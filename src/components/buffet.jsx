'use client';

import { useLanguage } from './language';
import { buffet, drinks, foodRows } from '../content.mjs';
import { Icon } from './icon';
import { MenuTabs } from './menu-tabs';
import { GalleryMotion } from './motion';
import { Photo } from './photo';

function money(value, locale) {
  const amount = value.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return locale === 'pt-PT' ? `${amount} ${buffet.currency}` : `${buffet.currency}${amount}`;
}

function BuffetPrices() {
  const { t, locale } = useLanguage();
  return (
    <>
      <table className="price-table">
        <caption>{t('Preços do buffet por pessoa')}</caption>
        <thead>
          <tr>
            <th scope="col">{t('Refeição')}</th>
            <th scope="col">{t('Adultos')}</th>
            <th scope="col">{t('Crianças')} <span>{t(buffet.childAge)}</span></th>
          </tr>
        </thead>
        <tbody>
          {buffet.service.map(service => (
            <tr key={service.detail}>
              <th scope="row"><strong>{t(service.name)}</strong><span>{t(service.detail)}</span></th>
              <td>{money(service.adult, locale)}</td>
              <td>{money(service.child, locale)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="extra-grid">
        {buffet.extras.map(extra => (
          <div className="extra" key={extra.name}>
            <div><h3>{t(extra.name)}</h3><p>{t(extra.detail)}</p></div>
            <span>{money(extra.price, locale)}</span>
          </div>
        ))}
      </div>
      <ul className="price-notes">
        {buffet.notes.map(note => <li key={note}><Icon name="check" size={14} /> {t(note)}</li>)}
      </ul>
    </>
  );
}

function DrinksPrices() {
  const { t, locale } = useLanguage();
  return (
    <>
      <div className="drinks-grid">
        {drinks.map(column => (
          <div className="drinks-column" key={column[0].name}>
            {column.map(group => (
              <section className="drinks-group" key={group.name}>
                <h3>{t(group.name)}</h3>
                <dl>
                  {group.items.map(([name, price]) => (
                    <div key={name}><dt>{t(name)}</dt><span aria-hidden="true" /><dd>{money(price, locale)}</dd></div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        ))}
      </div>
      <ul className="price-notes">
        <li><Icon name="check" size={14} /> {t('IVA incluído')}</li>
        <li>{t('Carta completa de vinhos, licores e digestivos disponível no restaurante.')}</li>
      </ul>
    </>
  );
}

function FoodRows() {
  const { t } = useLanguage();
  const sizes = '(max-width: 500px) 56vw, (max-width: 640px) 280px, (max-width: 1000px) 235px, 23.5vw';

  return (
    <GalleryMotion>
      {foodRows.map((row, index) => (
        <div key={index} className="food-row" role="region" aria-label={`${t('Fotografias do buffet, fila')} ${index + 1}`}>
          <div className="food-track">
            <div className="food-sequence">
              {row.map(photo => <Photo key={photo.file} photo={photo} sizes={sizes} />)}
            </div>
            <div className="food-sequence food-copy" aria-hidden="true">
              {row.map(photo => <Photo key={photo.file} photo={photo} sizes={sizes} decorative />)}
            </div>
          </div>
        </div>
      ))}
    </GalleryMotion>
  );
}

export function BuffetSection() {
  const { t } = useLanguage();
  return (
    <section id="buffet" className="buffet-section" aria-labelledby="buffet-title">
      <div className="container centered buffet-intro" data-reveal>
        <p className="eyebrow"><span className="rule" /> {t('O buffet')} <span className="rule" /></p>
        <h2 id="buffet-title">{t('Há sempre mais')} <em>{t('para provar.')}</em></h2>
        <p>{t('Entre sushi, pratos quentes e teppanyaki feito na hora, escolha o que mais lhe apetece e componha o seu prato.')}</p>
      </div>
      <FoodRows />
      <div className="menu-wrap">
        <div className="container">
          <MenuTabs buffetPanel={<BuffetPrices />} drinksPanel={<DrinksPrices />} />
        </div>
      </div>
    </section>
  );
}

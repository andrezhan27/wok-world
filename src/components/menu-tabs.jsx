'use client';

import { useLanguage } from './language';
import { useRef, useState } from 'react';

const tabs = [
  { id: 'buffet', label: 'Buffet' },
  { id: 'drinks', label: 'Bebidas' },
];

export function MenuTabs({ buffetPanel, drinksPanel }) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const buttons = useRef([]);

  function onKeyDown(event, index) {
    const last = tabs.length - 1;
    let next;
    switch (event.key) {
      case 'ArrowLeft': next = index === 0 ? last : index - 1; break;
      case 'ArrowRight': next = index === last ? 0 : index + 1; break;
      case 'Home': next = 0; break;
      case 'End': next = last; break;
      default: return;
    }
    event.preventDefault();
    setSelected(next);
    buttons.current[next].focus();
  }

  const panels = [buffetPanel, drinksPanel];

  return (
    <>
      <div className="menu-top">
        <div>
          <p className="eyebrow"><span className="rule" /> {t('A nossa carta')}</p>
          <h2 id="menu-title">{t('Preços e bebidas')}</h2>
        </div>
        <div className="tabs" role="tablist" aria-label={t('Preços e bebidas')}>
          {tabs.map(({ id, label }, index) => (
            <button key={id} ref={button => { buttons.current[index] = button; }} type="button" role="tab" id={`tab-${id}`}
              aria-selected={selected === index} aria-controls={`panel-${id}`} tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)} onKeyDown={event => onKeyDown(event, index)}>
              {t(label)}
            </button>
          ))}
        </div>
      </div>
      {tabs.map(({ id }, index) => (
        <div key={id} id={`panel-${id}`} role="tabpanel" aria-labelledby={`tab-${id}`} tabIndex={0} hidden={selected !== index}>
          {panels[index]}
        </div>
      ))}
    </>
  );
}

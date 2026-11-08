'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { english } from '../translations.mjs';

const LanguageContext = createContext('pt');
const SetLanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt');
  const pathname = usePathname();

  useEffect(() => {
    try {
      if (localStorage.getItem('wok-world-language') === 'en') setLanguage('en');
    } catch {
      // The switch still works for this visit when browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-PT' : 'en';
    const title = pathname === '/reservation'
      ? ['Reservar mesa · Wok World', 'Book a table · Wok World']
      : ['Wok World · Buffet livre em Sintra', 'Wok World · All-you-can-eat buffet in Sintra'];
    document.title = title[language === 'pt' ? 0 : 1];
  }, [language, pathname]);

  function changeLanguage(nextLanguage) {
    setLanguage(nextLanguage);
    try {
      localStorage.setItem('wok-world-language', nextLanguage);
    } catch {}
  }

  return (
    <LanguageContext.Provider value={language}>
      <SetLanguageContext.Provider value={changeLanguage}>{children}</SetLanguageContext.Provider>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const language = useContext(LanguageContext);
  return {
    language,
    locale: language === 'pt' ? 'pt-PT' : 'en-GB',
    t: text => language === 'en' ? english[text] ?? text : text,
  };
}

export function LanguageToggle() {
  const { language, t } = useLanguage();
  const setLanguage = useContext(SetLanguageContext);

  return (
    <div className="language-toggle" role="group" aria-label={t('Idioma')}>
      <button type="button" lang="pt-PT" aria-label="Português" aria-pressed={language === 'pt'} onClick={() => setLanguage('pt')}>PT</button>
      <button type="button" lang="en" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
    </div>
  );
}

export function SkipLink() {
  const { t } = useLanguage();
  return <a className="skip-link" href="#main">{t('Saltar para o conteúdo')}</a>;
}

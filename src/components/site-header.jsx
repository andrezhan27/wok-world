'use client';

import { LanguageToggle, useLanguage } from './language';
import { useEffect, useRef, useState } from 'react';
import { navigation } from '../content.mjs';
import { Icon } from './icon';
import { Brand, NavLinks, ReserveLink } from './site-links';

export function SiteHeader({ reservation = false }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(reservation ? undefined : navigation[0].id);
  const menuButton = useRef(null);

  function closeMenu() {
    setOpen(false);
    menuButton.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    if (!open) return;
    const narrowScreen = matchMedia('(max-width: 980px)');
    const onResize = event => { if (!event.matches) setOpen(false); };
    const onKey = event => { if (event.key === 'Escape') closeMenu(); };
    narrowScreen.addEventListener('change', onResize);
    document.addEventListener('keydown', onKey);
    return () => {
      narrowScreen.removeEventListener('change', onResize);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    if (reservation) return;
    const sections = navigation.map(({ id }) => document.getElementById(id));
    let frame;
    function update() {
      setScrolled(window.scrollY > 25);
      const active = sections.findLast(section => section?.getBoundingClientRect().top <= 105);
      setActiveSection(active?.id ?? navigation[0].id);
      frame = undefined;
    }
    const onScroll = () => { frame ??= requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [reservation]);

  return (
    <header className={`site-header${reservation || scrolled ? ' is-solid' : ''}${open ? ' menu-visible' : ''}`}>
      <div className="nav-bar">
        <Brand className="nav-brand" reservation={reservation} />
        <nav className="desktop-nav" aria-label={t('Navegação principal')}>
          <NavLinks reservation={reservation} activeSection={activeSection} />
        </nav>
        <div className="nav-actions">
          <LanguageToggle />
          <ReserveLink className="nav-book" reservation={reservation} compact />
        </div>
        <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu"
          aria-label={t(open ? 'Fechar menu' : 'Abrir menu')} onClick={() => setOpen(!open)}>
          <span className="menu-open"><Icon name="menu" size={24} /></span>
          <span className="menu-close"><Icon name="close" size={24} /></span>
        </button>
      </div>
      <nav id="mobile-menu" className="mobile-menu" aria-label={t('Navegação móvel')} hidden={!open}>
        <NavLinks reservation={reservation} activeSection={activeSection} onClick={closeMenu} />
        <ReserveLink reservation={reservation} onClick={closeMenu} />
      </nav>
    </header>
  );
}

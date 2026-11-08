'use client';

import { useLanguage } from './language';
import { useEffect, useState } from 'react';
import { Icon } from './icon';

export function HomeMotion() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const motion = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => target.classList.toggle('is-visible', isIntersecting));
    });
    document.querySelectorAll('.food-row, .reviews-marquee').forEach(section => motion.observe(section));

    const reveal = new IntersectionObserver(entries => {
      entries.filter(entry => entry.isIntersecting).forEach(({ target }) => {
        target.classList.add('has-entered');
        reveal.unobserve(target);
      });
    }, { threshold: .15 });
    document.querySelectorAll('[data-reveal]').forEach(section => reveal.observe(section));

    return () => {
      motion.disconnect();
      reveal.disconnect();
    };
  }, []);

  return null;
}

function useMotionAllowed(manualOnPhones = false) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const phone = matchMedia('(max-width: 640px)');
    const syncMotion = () => setAnimate(!reducedMotion.matches && !(manualOnPhones && phone.matches));
    syncMotion();
    reducedMotion.addEventListener('change', syncMotion);
    if (manualOnPhones) phone.addEventListener('change', syncMotion);
    return () => {
      reducedMotion.removeEventListener('change', syncMotion);
      if (manualOnPhones) phone.removeEventListener('change', syncMotion);
    };
  }, [manualOnPhones]);

  return animate;
}

export function GalleryMotion({ children }) {
  const { t } = useLanguage();
  const animate = useMotionAllowed(true);
  const [paused, setPaused] = useState(false);

  return (
    <>
      <div className={`food-rows${animate ? ' is-animated' : ''}${paused ? ' is-paused' : ''}`} id="food-rows">
        {children}
      </div>
      <div className="container food-caption">
        <p><span className="caption-dot" /> {t('Do balcão à mesa')}</p>
        <p className="food-swipe-hint">{t('Deslize para ver mais')} <Icon name="arrow" size={14} /></p>
        <button className="motion-toggle" type="button" aria-controls="food-rows" hidden={!animate} onClick={() => setPaused(!paused)}>
          <Icon name={paused ? 'play' : 'pause'} size={15} />
          <span>{t(paused ? 'Retomar fotografias' : 'Pausar fotografias')}</span>
        </button>
      </div>
    </>
  );
}

export function ReviewsMotion({ children }) {
  const animate = useMotionAllowed();
  const { t } = useLanguage();

  return (
    <div id="reviews-marquee" className={`reviews-marquee${animate ? ' is-animated' : ''}`}
      role="region" aria-label={t('Carrossel de avaliações')} tabIndex={0}>
      {children}
    </div>
  );
}

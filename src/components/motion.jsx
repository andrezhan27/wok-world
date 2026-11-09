'use client';

import { useLanguage } from './language';
import { useEffect, useState } from 'react';

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

function useMotionAllowed() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setAnimate(!reducedMotion.matches);
    syncMotion();
    reducedMotion.addEventListener('change', syncMotion);
    return () => reducedMotion.removeEventListener('change', syncMotion);
  }, []);

  return animate;
}

export function GalleryMotion({ children }) {
  const animate = useMotionAllowed();

  return (
    <div className={`food-rows${animate ? ' is-animated' : ''}`} id="food-rows">
      {children}
    </div>
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

'use client';

import { useLanguage } from './language';
export function imageUrl(file, suffix = '') {
  return `/images/${file}${suffix}.webp`;
}

export function Photo({ photo, sizes, className = '', decorative = false }) {
  const { t } = useLanguage();
  return (
    <figure className={`photo ${className}`}>
      <img src={imageUrl(photo.file, '-480')}
        srcSet={`${imageUrl(photo.file, '-320')} 320w, ${imageUrl(photo.file, '-480')} 480w, ${imageUrl(photo.file, '-640')} 640w, ${imageUrl(photo.file)} 900w`}
        sizes={sizes} width={900} height={1200} loading="lazy" decoding="async"
        alt={decorative ? '' : t(photo.alt)} style={{ '--crop': photo.position }} />
    </figure>
  );
}

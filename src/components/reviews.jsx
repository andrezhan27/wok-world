'use client';

import { useLanguage } from './language';
import { restaurant, reviews } from '../content.mjs';
import { Photo } from './photo';
import { ReviewsMotion } from './motion';

function GoogleMark() {
  return (
    <svg className="google-mark" aria-hidden="true" viewBox="0 0 48 48">
      <path fill="#4285f4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5h6.6c3.9-3.6 6.1-8.8 6.1-14.9z" />
      <path fill="#34a853" d="M24 44c5.5 0 10.2-1.8 13.5-4.6l-6.6-5A12.1 12.1 0 0 1 12.6 28H5.8v5.2A20 20 0 0 0 24 44z" />
      <path fill="#fbbc05" d="M12.6 28a12 12 0 0 1 0-8v-5.2H5.8a20 20 0 0 0 0 18.4z" />
      <path fill="#ea4335" d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8A19.2 19.2 0 0 0 24 4 20 20 0 0 0 5.8 14.8l6.8 5.2A12 12 0 0 1 24 12z" />
    </svg>
  );
}

function RatingStars({ rating }) {
  const { t, locale } = useLanguage();
  return (
    <span className="stars" role="img" aria-label={`${rating.toLocaleString(locale)} ${t('de 5 estrelas')}`}>
      <span aria-hidden="true">★★★★★</span>
      <span className="stars-fill" style={{ width: `${rating * 20}%` }} aria-hidden="true">★★★★★</span>
    </span>
  );
}

function ReviewGroup({ duplicate = false }) {
  const { language } = useLanguage();
  return (
    <div className={`review-group${duplicate ? ' review-copy' : ''}`} aria-hidden={duplicate || undefined}>
      {reviews.map(review => (
        <article className="review-card" key={review.name}>
          <div className="review-card-heading">
            <span className="review-avatar" style={{ backgroundColor: review.color }} aria-hidden="true">{review.name[0]}</span>
            <h3>{review.name}</h3>
            <GoogleMark />
          </div>
          <RatingStars rating={review.rating} />
          <blockquote>{language === 'pt' ? review.quotePt : review.quote}</blockquote>
        </article>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const { t, locale } = useLanguage();
  return (
    <section id="avaliacoes" className="reviews-section section" aria-labelledby="reviews-title">
      <div className="container centered">
        <p className="eyebrow"><span className="rule" /> {t('Avaliações')} <span className="rule" /></p>
        <h2 id="reviews-title">{t('Quem já')} <em>{t('se sentou à mesa.')}</em></h2>
      </div>
      <div className="container reviews-photo">
        <Photo photo={{ file: restaurant.images.reviewBackdrop, position: '50% 72%' }}
          sizes="(max-width: 1000px) 90vw, 900px" decorative />
        <a className="google-rating" href={restaurant.googlePlaceUrl} target="_blank" rel="noopener noreferrer">
          <GoogleMark />
          <div>
            <span className="rating-label">{t('Avaliações no Google')}</span>
            <div className="rating-score">
              <strong>{restaurant.googleRating.toLocaleString(locale)}</strong>
              <RatingStars rating={restaurant.googleRating} />
            </div>
          </div>
        </a>
      </div>
      <ReviewsMotion>
        <div className="review-track">
          <ReviewGroup />
          <ReviewGroup duplicate />
        </div>
      </ReviewsMotion>
    </section>
  );
}

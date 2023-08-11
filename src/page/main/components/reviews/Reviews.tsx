'use client';

import Image from 'next/image';
import React from 'react';
import imageForReviews from './assets/image/gym-man-woman-workout-fitness.jpg';
import ReviewsSwiper from './components/ReviewsSwiper/ReviewsSwiper';
import { useLanguage } from "'@/hooks/useLanguage'";
import { cardType } from './components/ReviewsCards/ReviewsCards';
import { useFontForLanguage } from "'@/hooks/useFontForLanguage'";
import Section from '../section/Section';

type reviewsContentType = {
  header: string;
  cards: cardType[];
};

const Reviews = () => {
  const reviewsContent = useLanguage({
    resourse: 'main',
    translationName: 'main.reviews',
  }) as reviewsContentType;
  const font = useFontForLanguage();

  return (
    <Section>
      <h2 className={font}>{reviewsContent.header.toUpperCase()}</h2>
      <Image src={imageForReviews} alt='a woman and a man train' />
      <ReviewsSwiper cards={reviewsContent.cards} />
    </Section>
  );
};

export default Reviews;

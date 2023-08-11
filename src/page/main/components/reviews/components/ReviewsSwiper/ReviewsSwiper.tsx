'use client';

import React from 'react';
import { EffectCards } from 'swiper';
import MySwiper from "'@/components/MySwiper/MySwiper'";
import ReviewsCards, { cardType } from '../ReviewsCards/ReviewsCards';
import styles from './ReviewsSwiper.module.scss';
import stylesForButtons from '../../assets/styles/stylesForButtons.module.scss';

const ReviewsSwiper = ({ cards }: { cards: cardType[] }) => {
  return (
    <div className={styles.container}>
      <MySwiper
        effect={'cards'}
        grabCursor={true}
        slidesPerView={1}
        modules={[EffectCards]}
        useButtons={true}
        stylesForButtons={stylesForButtons.buttonContainer}
      >
        {ReviewsCards(cards)}
      </MySwiper>
    </div>
  );
};

export default ReviewsSwiper;

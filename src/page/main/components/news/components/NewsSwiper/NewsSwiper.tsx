'use client';

import React from 'react';

import { Pagination } from 'swiper';

import MySwiper from "'@/components/MySwiper/MySwiper'";
import NewsCard from '../NewsCard/NewsCard';
import styles from './NewsSwiper.module.scss';
import stylesForButtons from '../../assets/styles/SwiperButtons.module.scss';
import { useWidth } from "'@/hooks/useWidth'";

const NewsSwiper = ({ buttonText }: { buttonText: string }) => {
  const isMobileWidth = useWidth();

  return (
    <div className={styles.swiperContainer}>
      <MySwiper
        slidesPerView={isMobileWidth ? 1 : 3}
        spaceBetween={10}
        modules={[Pagination]}
        useButtons={true}
        stylesForButtons={stylesForButtons.buttonContainer}
        style={{ height: 400 }}
      >
        {NewsCard(buttonText)}
      </MySwiper>
    </div>
  );
};

export default NewsSwiper;

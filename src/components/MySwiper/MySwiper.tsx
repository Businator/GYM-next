'use client';
import React, { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { Pagination, SwiperOptions } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/css/effect-cards';

import styles from './MySwiper.module.scss';
import { SwiperButtons } from '../SwiperButtons/SwiperButtons';

interface MySwiperProps extends SwiperOptions {
  children: ReactNode;
  useButtons?: boolean;
  style?: React.CSSProperties;
  stylesForButtons?: string;
}

const MySwiper: React.FC<MySwiperProps> = ({
  children,
  useButtons,
  stylesForButtons,
  style,
  ...options
}) => {
  return (
    <Swiper
      style={style}
      {...options}
      pagination={{
        clickable: true,
        bulletClass: styles.bullet,
        bulletActiveClass: styles.bulletActive,
      }}
    >
      {children}
      {useButtons ? <SwiperButtons className={stylesForButtons} /> : ''}
    </Swiper>
  );
};

export default MySwiper;

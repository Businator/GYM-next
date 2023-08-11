'use client';

import React from 'react';
import { Pagination } from 'swiper';
import { SwiperSlide, useSwiper } from 'swiper/react';
import Image from 'next/image';
import MySwiper from "'@/components/MySwiper/MySwiper'";
import { Button } from "'@/UI/button/Button'";

import img1 from './assets/image/app-swiper-card-image-1.jpg';
import img2 from './assets/image/app-swiper-card-image-2.jpg';
import img3 from './assets/image/app-swiper-card-image-3.jpg';
import styles from './AppSwiper.module.scss';

const contentList = [
  {
    title: 'Meet your coach, start your journey',
    img: img1,
  },
  {
    title: 'Create a workout plan, to stay fit',
    img: img2,
  },
  {
    title: 'Action is the key to all success',
    img: img3,
  },
];

const AppSwiper = () => {
  return (
    <div className={styles.container}>
      <MySwiper slidesPerView={1} modules={[Pagination]} spaceBetween={50}>
        {contentList.map((item, index, arr) => {
          return (
            <SwiperSlide key={index} className={styles.card}>
              <Image src={item.img} alt='' />
              <div className={styles.content}>
                <span>{item.title.toUpperCase()}</span>
                {index === arr.length - 1 && <Button>START NOW</Button>}
              </div>
              <div className={styles.block}></div>
            </SwiperSlide>
          );
        })}
      </MySwiper>
    </div>
  );
};

export default AppSwiper;

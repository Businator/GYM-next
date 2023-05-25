"use client";
import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

import styles from "./SwiperCoaches.module.scss";

export const MySwiper = ({
  data,
  children,
}: {
  data: [];
  children: ReactNode;
}) => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }}
        modules={[Pagination]}
      >
        {data.map((element) => {
          return (
            <SwiperSlide key={element} className={styles.card}>
              {children}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

"use client";
import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Pagination, SwiperOptions } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

import styles from "./MySwiper.module.scss";

interface MySwiperProps extends SwiperOptions {
  children: ReactNode;
  usePagination: boolean;
}

export const MySwiper: React.FC<MySwiperProps> = ({ children, ...options }) => {
  return (
    <Swiper
      {...options}
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
        bulletClass: styles.bullet,
        bulletActiveClass: styles.bulletActive,
      }}
      modules={[Pagination]}
    >
      {children}
    </Swiper>
  );
};

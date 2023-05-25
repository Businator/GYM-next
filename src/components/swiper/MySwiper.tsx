"use client";
import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Pagination, SwiperOptions } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

import styles from "./MySwiper.module.scss";
import { SwiperButtons } from "../SwiperButtons/SwiperButtons";

interface MySwiperProps extends SwiperOptions {
  children: ReactNode;
  usePagination?: boolean;
  useButtons?: boolean;
  style?: React.CSSProperties;
  stylesForButtons?: string;
}

export const MySwiper: React.FC<MySwiperProps> = ({
  children,
  useButtons,
  stylesForButtons,
  usePagination,
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
      modules={usePagination ? [Pagination] : []}
    >
      {children}
      {useButtons ? <SwiperButtons className={stylesForButtons} /> : ""}
    </Swiper>
  );
};

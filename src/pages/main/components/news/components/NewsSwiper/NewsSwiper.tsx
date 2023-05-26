"use client";

import React from "react";

import { Pagination } from "swiper";

import { MySwiper } from "'@/components/MySwiper/MySwiper'";
import { NewsCard } from "../NewsCard/NewsCard";
import styles from "./NewsSwiper.module.scss";
import stylesForButtons from "../../assets/styles/SwiperButtons.module.scss";

export const NewsSwiper = () => {
  return (
    <div className={styles.swiperContainer}>
      <MySwiper
        children={NewsCard()}
        slidesPerView={3}
        spaceBetween={10}
        modules={[Pagination]}
        useButtons={true}
        stylesForButtons={stylesForButtons.buttonContainer}
        style={{ height: 400 }}
      />
    </div>
  );
};

"use client";

import React from "react";

import { Pagination } from "swiper";

import { MySwiper } from "'@/components/MySwiper/MySwiper'";
import { NewsCard } from "../NewsCard/NewsCard";
import styles from "./NewsSwiper.module.scss";
import stylesForButtons from "../../assets/styles/SwiperButtons.module.scss";
import { showNumberOfCards } from "'@/utils/showNumberOfCards'";

export const NewsSwiper = () => {
  return (
    <div className={styles.swiperContainer}>
      <MySwiper
        children={NewsCard()}
        slidesPerView={showNumberOfCards()}
        spaceBetween={10}
        modules={[Pagination]}
        useButtons={true}
        stylesForButtons={stylesForButtons.buttonContainer}
        style={{ height: 400 }}
      />
    </div>
  );
};

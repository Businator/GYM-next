"use client";

import React from "react";
import { EffectCards } from "swiper";
import { MySwiper } from "'@/components/MySwiper/MySwiper'";
import { ReviewsCards } from "../ReviewsCards/ReviewsCards";
import styles from "./ReviewsSwiper.module.scss";
import stylesForButtons from "../../assets/styles/stylesForButtons.module.scss";

export const ReviewsSwiper = () => {
  return (
    <div className={styles.container}>
      <MySwiper
        effect={"cards"}
        grabCursor={true}
        slidesPerView={1}
        modules={[EffectCards]}
        useButtons={true}
        stylesForButtons={stylesForButtons.buttonContainer}
      >
        {ReviewsCards()}
      </MySwiper>
    </div>
  );
};

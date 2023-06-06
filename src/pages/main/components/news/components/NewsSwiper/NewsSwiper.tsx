"use client";

import React, { useState, useEffect } from "react";

import { Pagination } from "swiper";

import { MySwiper } from "'@/components/MySwiper/MySwiper'";
import { NewsCard } from "../NewsCard/NewsCard";
import styles from "./NewsSwiper.module.scss";
import stylesForButtons from "../../assets/styles/SwiperButtons.module.scss";
import { showNumberOfCards } from "'@/utils/showNumberOfCards'";

export const NewsSwiper = ({ buttonText }: { buttonText: string }) => {
  const [numberOfCards, setNumberOfCards] = useState(0);

  useEffect(() => {
    setNumberOfCards(showNumberOfCards());
  }, []);
  return (
    <div className={styles.swiperContainer}>
      <MySwiper
        slidesPerView={numberOfCards}
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

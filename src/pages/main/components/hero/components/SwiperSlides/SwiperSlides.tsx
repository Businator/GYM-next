import React from "react";
import { SwiperSlide } from "swiper/react";

import styles from "./SwiperSlides.module.scss";
import { integral, openSans } from "'@/assets/fonts/fonts'";

export const SwiperSlides = () => {
  return (
    <>
      <SwiperSlide className={styles.card}>
        <h1 className={integral.className}>
          WORK WITH <br /> PROFFESOINALS
        </h1>
        <p className={openSans.className}>
          Achieve your goals and become the best version of yourself
        </p>
      </SwiperSlide>
      <SwiperSlide className={styles.card}>
        <h1 className={integral.className}>WORK ALONE</h1>
        <p className={openSans.className}>
          Achieve your goals and become the best version of yourself
        </p>
      </SwiperSlide>
      <SwiperSlide className={styles.card}>
        <h1 className={integral.className}>
          WORK WITH <br /> OUR APPLICATION
        </h1>
        <p className={openSans.className}>
          Achieve your goals and become the best version of yourself
        </p>
      </SwiperSlide>
    </>
  );
};

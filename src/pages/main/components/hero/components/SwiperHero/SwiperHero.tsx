"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtons } from "./components/SwiperButtons/SwiperButtons";
import { Button } from "'@/UI/button/Button'";

import { integral, openSans } from "'@/assets/fonts/fonts'";
import { LinkWithArrow } from "'@/UI/link/LinkWithArrow'";
import styles from "./SwiperHero.module.scss";

export const SwiperHero = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper slidesPerView={1}>
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
        <div className={styles.buttonsContainer}>
          <Button>START NOW</Button>
          <LinkWithArrow />
        </div>
        <SwiperButtons />
      </Swiper>
    </div>
  );
};

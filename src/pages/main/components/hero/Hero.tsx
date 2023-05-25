"use client";
import React from "react";
import clsx from "clsx";
import { integral, openSans } from "../../../../assets/fonts/fonts";
import { Header } from "'@/UI/header/Header'";
import { GiDeathStar } from "react-icons/gi";
import styles from "./Hero.module.scss";
import { MySwiper } from "'@/components/swiper/MySwiper'";
import { Button } from "'@/UI/button/Button'";
import { LinkWithArrow } from "'@/UI/link/LinkWithArrow'";
import { SwiperSlides } from "./components/SwiperSlides/SwiperSlides";
import { SwiperButtons } from "'@/components/SwiperButtons/SwiperButtons'";

const textList = [
  "DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST PROFFESSIONAL",
  "INDIVIDUAL SELECTION OF A DIET",
  "CONVENIENT FUNCTIONALITY FOR MAKING AN INDIVIDUAL WORKOUT",
];

const Buttons = () => {
  return (
    <>
      <div className={styles.buttonsContainer}>
        <Button>START NOW</Button>
        <LinkWithArrow />
      </div>
      <SwiperButtons />
    </>
  );
};

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBg}>
        <Header />
        <div className={styles.swiperContainer}>
          <MySwiper
            slidesPerView={1}
            children={SwiperSlides()}
            usePagination={false}
            useButtons={true}
          />
        </div>
      </div>
      <div className={styles.marqueeContainer}>
        <div className={clsx([integral.className, styles.marquee])}>
          {textList.map((text, index) => {
            return (
              <span key={index}>
                {text}
                <GiDeathStar />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

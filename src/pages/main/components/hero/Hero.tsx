"use client";
import React from "react";
import clsx from "clsx";
import Marquee from "react-fast-marquee";
import { integral } from "../../../../assets/fonts/fonts";
import { Header } from "'@/UI/header/Header'";
import { GiDeathStar } from "react-icons/gi";
import { MySwiper } from "'@/components/MySwiper/MySwiper'";
import { Button } from "'@/UI/button/Button'";
import { LinkWithArrow } from "'@/UI/link/LinkWithArrow'";
import { HeroCards } from "./components/HeroCards/HeroCards";
import styles from "./Hero.module.scss";

const textList = [
  "DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST PROFFESSIONAL",
  "INDIVIDUAL SELECTION OF A DIET",
  "CONVENIENT FUNCTIONALITY FOR MAKING AN INDIVIDUAL WORKOUT",
];

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.swiperContainer}>
          <MySwiper slidesPerView={1} useButtons={true}>
            {HeroCards()}
          </MySwiper>
          <div className={styles.buttonsContainer}>
            <Button>START NOW</Button>
            <LinkWithArrow />
          </div>
        </div>
      </div>
      <Marquee className={styles.marqueeContainer}>
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
      </Marquee>
    </section>
  );
};

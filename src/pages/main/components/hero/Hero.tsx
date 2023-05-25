import React from "react";
import { integral } from "../../../../assets/fonts/fonts";
import { Header } from "'@/components/header/Header'";
import clsx from "clsx";
import { GiDeathStar } from "react-icons/gi";
import styles from "./Hero.module.scss";
import { SwiperHero } from "./components/SwiperHero/SwiperHero";

const textList = [
  "DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST PROFFESSIONAL",
  "INDIVIDUAL SELECTION OF A DIET",
  "CONVENIENT FUNCTIONALITY FOR MAKING AN INDIVIDUAL WORKOUT",
];

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBg}>
        <Header />
        <SwiperHero />
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

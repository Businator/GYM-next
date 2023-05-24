import React from "react";
import { integral, openSans } from "../../../../assets/fonts/fonts";
import { Header } from "'@/components/header/Header'";
import clsx from "clsx";
import styles from "./Hero.module.scss";
import { SwiperHero } from "./components/SwiperHero/SwiperHero";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBg}>
        <Header />
        <SwiperHero />
      </div>
      <div className={clsx([integral.className, styles.slider])}>
        DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST PROFFESSIONAL
      </div>
    </div>
  );
};

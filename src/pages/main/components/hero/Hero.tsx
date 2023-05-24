import React from "react";
import { integral, openSans } from "../../../../assets/fonts/fonts";
import { Button } from "'@/components/UI/button/Button'";
import { Header } from "'@/components/header/Header'";
import clsx from "clsx";
import styles from "./Hero.module.scss";
import { LinkWithArrow } from "'@/components/UI/link/LinkWithArrow'";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBg}>
        <Header />
        <section>
          <h1 className={integral.className}>
            WORK WITH <br /> PROFFESOINALS
          </h1>
          <p className={openSans.className}>
            Achieve your goals and become the best version of yourself
          </p>
          <div>
            <Button>START NOW</Button>
            <LinkWithArrow />
          </div>
          <div className={styles.buttonsContainer}>
            <button>Left</button>
            <button>Right</button>
          </div>
        </section>
      </div>
      <div className={clsx([integral.className, styles.slider])}>
        DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST PROFFESSIONAL
      </div>
    </div>
  );
};

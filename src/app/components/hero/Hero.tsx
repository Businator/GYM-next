import React from "react";
import { integral, openSans } from "../../../../public/styles/fonts";
import { Button } from "'@/components/UI/button/Button'";
import Link from "next/link";
import { Header } from "'@/components/UI/header/Header'";
import clsx from "clsx";
import styles from "./Hero.module.scss";

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
            <Link className={integral.className} href={"/about"}>
              Learn more
            </Link>
          </div>
          <div className={styles.buttonsContainer}>
            <button>Left</button>
            <button>Right</button>
          </div>
        </section>
        <div className={clsx([integral.className, styles.slider])}>
          DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST PROFFESSIONAL
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import React from "react";

import bottle from "./assets/image/bottle.png";
import dumbbell from "./assets/image/dumbbell.png";
import exspander from "./assets/image/exspander.png";
import { Learn } from "'@/components/UI/learn/Learn'";

import styles from "./Choose.module.scss";
import { integral } from "../../../../public/styles/fonts";

export const Choose = () => {
  return (
    <section>
      <h2 className={integral.className}>WHY CHOOSE US</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image alt="dumbbell" src={dumbbell} width={100} height={100} />
          <h3 className={integral.className}>MUSCLE BUILDING</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            repellendus similique vero illum sed totam soluta voluptas
          </p>
          <div>
            <Learn />
            <span>F</span>
          </div>
        </div>
        <div className={styles.card}>
          <Image alt="exspander" src={exspander} width={100} height={100} />
          <h3 className={integral.className}>MUSCLE BUILDING</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            repellendus similique vero illum sed totam soluta voluptas
          </p>
          <div>
            <Learn />
            <span>F</span>
          </div>
        </div>
        <div className={styles.card}>
          <Image alt="bottle" src={bottle} width={100} height={100} />
          <h3 className={integral.className}>MUSCLE BUILDING</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            repellendus similique vero illum sed totam soluta voluptas
          </p>
          <div>
            <Learn />
            <span>F</span>
          </div>
        </div>
      </div>
    </section>
  );
};

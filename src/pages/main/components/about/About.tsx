import React from "react";
import { integral } from "../../../../assets/fonts/fonts";
import Image from "next/image";
import aboutImg from "./assets/image/about.jpg";
import aboutCircOne from "./assets/image/about-circ-1.jpg";
import aboutCircTwo from "./assets/image/about-circ-2.jpg";
import styles from "./About.module.scss";
import { Button } from "'@/UI/button/Button'";

export const About = () => {
  return (
    <section>
      <h2 className={integral.className}>ABOUT OUR GYM</h2>
      <Image src={aboutImg} alt="A man with a dumbbell" />
      <div className={styles.description}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          minima? Quia quasi velit nesciunt rem autem veritatis cum repudiandae
          minima pariatur esse temporibus qui quod eos, id nihil fugit
          reiciendis?
        </p>
        <Button children="10 YEARS" />
      </div>
      <div className={styles.content}>
        <div className={styles.circs}>
          <div className={styles.cirgBg}>
            <Image src={aboutCircOne} alt="" className={styles.circImg} />
          </div>
          <div className={styles.cirgBg}>
            <Image src={aboutCircTwo} alt="" className={styles.circImg} />
          </div>
        </div>
        <div className={styles.contentDescription}>
          <div>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            </p>
          </div>
          <div>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

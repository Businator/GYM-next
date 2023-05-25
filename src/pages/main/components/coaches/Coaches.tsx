import React from "react";

import styles from "./Coaches.module.scss";
import { integral } from "'@/assets/fonts/fonts'";
import { SwiperCoaches } from "./components/SwiperCoaches/SwiperCoaches";

export const Coaches = () => {
  return (
    <section>
      <h2 className={integral.className}>OUR BEST COACHES</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        voluptate atque sapiente quia.
      </p>
      <SwiperCoaches />
    </section>
  );
};

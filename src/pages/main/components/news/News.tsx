"use client";

import React from "react";
import { NewsSwiper } from "./components/NewsSwiper/NewsSwiper";
import { integral } from "'@/assets/fonts/fonts'";

import styles from "./News.module.scss";

export const News = () => {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <h2 className={integral.className}>BLOG & NEWS</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          corporis, earum autem eligendi, modi error eum corrupti officiis
        </p>
        <NewsSwiper />
      </div>
    </section>
  );
};

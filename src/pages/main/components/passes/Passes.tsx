"use client";

import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { integral } from "'@/assets/fonts/fonts'";
import { PassesSwitch } from "./components/PassesSwitch/PassesSwitch";
import { MySwiper } from "'@/components/MySwiper/MySwiper'";
import { Cards } from "./components/Cards/Cards";
import stylesForButtons from "./assets/styles/SwiperButtons.module.scss";
import styles from "./Passes.module.scss";

export const Passes = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.documentElement.scrollWidth < 639 && setIsMobile(true);
  }, []);

  return (
    <section>
      <h2 className={clsx([integral.className, styles.header])}>
        OUR GYM PASSES
      </h2>
      <PassesSwitch switchState={[isYearly, setIsYearly]} />
      <div className={styles.swiperContainer}>
        <MySwiper
          style={{ height: 400 }}
          slidesPerView={isMobile ? 1 : 2}
          spaceBetween={100}
          useButtons={true}
          stylesForButtons={stylesForButtons.buttonContainer}
        >
          {Cards(isYearly)}
        </MySwiper>
      </div>
    </section>
  );
};

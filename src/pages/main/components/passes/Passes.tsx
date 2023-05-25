"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { integral } from "'@/assets/fonts/fonts'";
import { PassesSwitch } from "./components/PassesSwitch/PassesSwitch";
import styles from "./Passes.module.scss";
import { MySwiper } from "'@/components/swiper/MySwiper'";
import { Cards } from "./components/Cards/Cards";
import { SwiperButtons } from "'@/components/SwiperButtons/SwiperButtons'";
import stylesForButtons from "./assets/styles/SwiperButtons.module.scss";

export const Passes = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section>
      <h2 className={clsx([integral.className, styles.header])}>
        OUR GYM PASSES
      </h2>
      <PassesSwitch switchState={[isYearly, setIsYearly]} />
      <div className={styles.swiperContainer}>
        <MySwiper
          style={{ height: 400 }}
          slidesPerView={2}
          spaceBetween={100}
          usePagination={true}
          children={Cards(isYearly)}
          useButtons={true}
          stylesForButtons={stylesForButtons.buttonContainer}
        />
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { integral } from "'@/assets/fonts/fonts'";
import { MySwitch } from "./components/MySwitch/MySwitch";
import { MySwiper } from "./components/MySwiper/MySwiper";
import styles from "./Passes.module.scss";

export const Passes = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section>
      <h2 className={clsx([integral.className, styles.header])}>
        OUR GYM PASSES
      </h2>
      <MySwitch switchState={[isYearly, setIsYearly]} />
      <MySwiper isYearly={isYearly} />
    </section>
  );
};

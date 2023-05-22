"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { integral } from "'@/assets/fonts/fonts'";
import { PassesSwitch } from "./components/PassesSwitch/PassesSwitch";
import { PassesSwiper } from "./components/PassesSwiper/PassesSwiper";
import styles from "./Passes.module.scss";

export const Passes = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section>
      <h2 className={clsx([integral.className, styles.header])}>
        OUR GYM PASSES
      </h2>
      <PassesSwitch switchState={[isYearly, setIsYearly]} />
      <PassesSwiper isYearly={isYearly} />
    </section>
  );
};

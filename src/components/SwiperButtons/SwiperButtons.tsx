import React from "react";
import { useSwiper } from "swiper/react";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";

import styles from "./SwiperButtons.module.scss";
import clsx from "clsx";

export const SwiperButtons = ({ className }: { className?: string }) => {
  const swiper = useSwiper();
  return (
    <div className={clsx([styles.buttonContainer, className])}>
      <button onClick={() => swiper.slidePrev()}>
        <HiOutlineArrowCircleLeft />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <HiOutlineArrowCircleRight />
      </button>
    </div>
  );
};

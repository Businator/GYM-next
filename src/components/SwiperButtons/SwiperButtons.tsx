import React, { useCallback, useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";

import styles from "./SwiperButtons.module.scss";
import clsx from "clsx";

export const SwiperButtons = ({ className }: { className?: string }) => {
  const swiper = useSwiper();
  const [isDisabledPrev, setIsDisabledPrev] = useState(true);
  const [isDisabledNext, setIsDisabledNext] = useState(false);

  const handlerClickPrev = () => {
    swiper.slidePrev();
    setIsDisabledPrev(swiper.progress === 0);
    setIsDisabledNext(swiper.progress === 1);
  };

  const handlerClickNext = () => {
    swiper.slideNext();
    setIsDisabledNext(swiper.progress === 1);
    setIsDisabledPrev(swiper.progress === 0);
  };

  return (
    <div className={clsx([styles.buttonContainer, className])}>
      <button onClick={handlerClickPrev} disabled={isDisabledPrev}>
        <HiOutlineArrowCircleLeft />
      </button>
      <button onClick={handlerClickNext} disabled={isDisabledNext}>
        <HiOutlineArrowCircleRight />
      </button>
    </div>
  );
};

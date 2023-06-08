import React, { useEffect, useState } from "react";
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

  useEffect(() => swiper.setProgress(0), [swiper]);

  const handlerClickPrev = () => {
    swiper.slidePrev();
    setIsDisabledPrev(swiper.isBeginning);
    setIsDisabledNext(swiper.isEnd);
  };

  const handlerClickNext = () => {
    swiper.slideNext();
    setIsDisabledNext(swiper.isEnd);
    setIsDisabledPrev(swiper.isBeginning);
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

import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

import { BiRightArrow } from "react-icons/bi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import styles from "./RegistrySwiperButton.module.scss";
import { Button } from "'@/UI/button/Button'";
import clsx from "clsx";
import { IUser } from "../../../../interfaces/IUser";

export const RegistrySwiperButton = ({
  user,
  isNextSlideState,
}: {
  user: IUser;
  isNextSlideState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) => {
  const swiper = useSwiper();
  const [isDisabledPrev, setIsDisabledPrev] = useState(true);
  const [isNextSlide, setIsNextSlide] = isNextSlideState;

  useEffect(() => {
    swiper.setProgress(0);
  }, [swiper]);

  const handlerClickPrev = () => {
    swiper.slidePrev();
    setIsDisabledPrev(swiper.isBeginning);
    setIsNextSlide(false);
  };

  const handlerClickNext = () => {
    swiper.slideNext();
    setIsDisabledPrev(swiper.isBeginning);
    setIsNextSlide(true);
  };

  return (
    <div
      className={clsx(
        styles.buttonContainer,
        swiper.isBeginning && styles.oneButton
      )}
    >
      <button
        className={clsx(styles.buttonLeft, swiper.isBeginning && "hidden")}
        onClick={handlerClickPrev}
        disabled={isDisabledPrev}
      >
        <BsFillArrowLeftCircleFill />
      </button>
      {swiper.isEnd ? (
        <Button type="submit" disabled={isNextSlide}>
          Submit
        </Button>
      ) : (
        <Button
          className={styles.buttonRight}
          onClick={handlerClickNext}
          disabled={isNextSlide}
        >
          Next <BiRightArrow />
        </Button>
      )}
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

import { BiRightArrow } from 'react-icons/bi';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

import { Button } from "'@/UI/button/Button'";
import clsx from 'clsx';
import styles from './RegistrySwiperButton.module.scss';

const RegistrySwiperButton = ({
  isDisabledButtonState,
}: {
  isDisabledButtonState: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ];
}) => {
  const swiper = useSwiper();
  const [isDisabledPrev, setIsDisabledPrev] = useState(true);
  const [isNextSlide, setIsNextSlide] = isDisabledButtonState;

  useEffect(() => {
    swiper.setProgress(0);
  }, [swiper]);

  const handlerClickPrev = () => {
    swiper.slidePrev();
    setIsDisabledPrev(swiper.isBeginning);
    setIsNextSlide(true);
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
        type='button'
        className={clsx(styles.buttonLeft, swiper.isBeginning && 'hidden')}
        onClick={handlerClickPrev}
        disabled={isDisabledPrev}
      >
        <BsFillArrowLeftCircleFill />
      </button>

      <Button
        type={swiper.isEnd ? 'submit' : 'button'}
        className={styles.buttonRight}
        onClick={swiper.isEnd ? () => {} : handlerClickNext}
        disabled={isNextSlide}
      >
        {swiper.isEnd ? 'SUBMIT' : 'NEXT'}
        <BiRightArrow />
      </Button>
    </div>
  );
};

export default RegistrySwiperButton;

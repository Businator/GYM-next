import React from 'react';
import { useSwiper } from 'swiper/react';
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from 'react-icons/hi';

import styles from './SwiperButtons.module.scss';

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => swiper.slidePrev()}>
        <HiOutlineArrowCircleLeft />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <HiOutlineArrowCircleRight />
      </button>
    </div>
  );
};

export default SwiperButtons;

import React from 'react';
import { SwiperSlide } from 'swiper/react';

import { useFontForLanguage } from "'@/hooks/useFontForLanguage'";
import clsx from 'clsx';
import { useTheme } from "'@/hooks/useTheme'";
import styles from './HeroCards.module.scss';

const HeroCards = ({
  headers,
  description,
}: {
  headers: string[];
  description: string;
}) => {
  const theme = useTheme();
  const font = useFontForLanguage();

  const addLineBreak = (text: string) => {
    const words = text.split(' ');
    if (words.length > 2) {
      return (
        <>
          {words[0]} <br />
          {words.slice(1).join(' ')}
        </>
      );
    }
    return text;
  };

  return (
    <>
      {headers.map((header, index) => {
        return (
          <SwiperSlide
            key={index}
            className={clsx(styles.card, theme === 'light' && styles.light)}
          >
            <h1 className={font}>{addLineBreak(header.toUpperCase())}</h1>
            <p>{description}</p>
          </SwiperSlide>
        );
      })}
    </>
  );
};

export default HeroCards;

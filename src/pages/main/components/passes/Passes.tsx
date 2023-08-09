'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import PassesSwitch from './components/PassesSwitch/PassesSwitch';
import MySwiper from "'@/components/MySwiper/MySwiper'";
import Cards, { cardsType } from './components/Cards/Cards';
import stylesForButtons from './assets/styles/SwiperButtons.module.scss';
import styles from './Passes.module.scss';
import { useLanguage } from "'@/hooks/useLanguage'";
import { useFontForLanguage } from "'@/hooks/useFontForLanguage'";
import Section from '../section/Section';
import { useWidth } from "'@/hooks/useWidth'";

type passesContentType = {
  header: string;
  switches: string[];
  cards: cardsType;
  button: string;
};

const Passes = () => {
  const [isYearly, setIsYearly] = useState(false);
  const font = useFontForLanguage();
  const isMobileWidth = useWidth();

  const passesContent = useLanguage({
    resourse: 'main',
    translationName: 'main.passes',
  }) as passesContentType;

  return (
    <Section>
      <h2 className={clsx([font, styles.header])}>
        {passesContent.header.toUpperCase()}
      </h2>
      <PassesSwitch
        switchState={[isYearly, setIsYearly]}
        switchesText={passesContent.switches}
      />
      <div className={styles.swiperContainer}>
        <MySwiper
          style={{ height: 400 }}
          slidesPerView={isMobileWidth ? 1 : 2}
          spaceBetween={100}
          useButtons={true}
          stylesForButtons={stylesForButtons.buttonContainer}
        >
          {Cards({
            isYearly,
            cards: passesContent.cards,
            buttonChild: passesContent.button,
          })}
        </MySwiper>
      </div>
    </Section>
  );
};

export default Passes;

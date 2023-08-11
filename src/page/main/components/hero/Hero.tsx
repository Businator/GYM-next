'use client';
import React from 'react';
import clsx from 'clsx';
import Marquee from 'react-fast-marquee';
import { GiDeathStar } from 'react-icons/gi';
import MySwiper from "'@/components/MySwiper/MySwiper'";
import { Button } from "'@/UI/button/Button'";
import { LinkWithArrow } from "'@/UI/link/LinkWithArrow'";
import HeroCards from './components/HeroCards/HeroCards';

import { useFontForLanguage } from "'@/hooks/useFontForLanguage'";
import styles from './Hero.module.scss';
import { useLanguage } from "'@/hooks/useLanguage'";
import Section from '../section/Section';
import { useSelector } from 'react-redux';
import { RootState } from "'@/store/store'";

type heroContentType = {
  header: string[];
  description: string;
  button: string;
  link: string;
  marquee: string[];
};

const Hero = () => {
  const font = useFontForLanguage();
  const lang = useSelector((state: RootState) => state.lang.lang);

  const heroContent = useLanguage({
    resourse: 'main',
    translationName: 'main.hero',
  }) as heroContentType;

  return (
    <Section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.swiperContainer}>
          <MySwiper slidesPerView={1} useButtons={true}>
            {HeroCards({
              headers: heroContent.header,
              description: heroContent.description,
            })}
          </MySwiper>
          <div className={styles.buttonsContainer}>
            <Button>{heroContent.button.toUpperCase()}</Button>
            <LinkWithArrow>{heroContent.link.toUpperCase()}</LinkWithArrow>
          </div>
        </div>
      </div>
      <Marquee className={styles.marqueeContainer}>
        <div className={clsx([font, styles.marquee])}>
          {heroContent.marquee.map((text, index, array) => {
            return (
              <span
                className={clsx([
                  lang === 'ru' && 'mt-1',
                  index === array.length - 1 && 'mr-8',
                ])}
                key={index}
              >
                <GiDeathStar />
                {text}
              </span>
            );
          })}
        </div>
      </Marquee>
    </Section>
  );
};

export default Hero;

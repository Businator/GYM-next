'use client';

import React from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import MySwiper from "'@/components/MySwiper/MySwiper'";
import { coachesList } from './mocks/coahesList';
import stylesForButtom from './assets/styles/SwiperButtons.module.scss';
import { useLanguage } from "'@/hooks/useLanguage'";
import { useFontForLanguage } from "'@/hooks/useFontForLanguage'";
import clsx from 'clsx';
import { useTheme } from "'@/hooks/useTheme'";
import styles from './Coaches.module.scss';
import Section from '../section/Section';
import { useWidth } from "'@/hooks/useWidth'";

type coachesContentType = {
  header: string;
  description: string;
};

const Coaches = () => {
  const theme = useTheme();
  const font = useFontForLanguage();
  const isMobileWidth = useWidth();

  const coachesContent = useLanguage({
    resourse: 'main',
    translationName: 'main.coaches',
  }) as coachesContentType;

  return (
    <Section>
      <h2 className={font}>{coachesContent.header.toUpperCase()}</h2>
      <p>{coachesContent.description}</p>
      <div className={styles.swiperContainer}>
        <MySwiper
          slidesPerView={isMobileWidth ? 1 : 3}
          spaceBetween={10}
          modules={[Pagination]}
          useButtons={true}
          stylesForButtons={stylesForButtom.buttonContainer}
        >
          {coachesList.map((coach) => {
            return (
              <SwiperSlide
                key={coach.id}
                className={clsx(styles.card, theme === 'light' && styles.light)}
              >
                <Image src={coach.img} alt={coach.name} />
                <div>
                  <h3>{coach.name}</h3>
                  <p>{coach.spec.toUpperCase()}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </MySwiper>
      </div>
    </Section>
  );
};

export default Coaches;

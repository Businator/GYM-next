'use client';

import React from 'react';
import NewsSwiper from './components/NewsSwiper/NewsSwiper';

import { useLanguage } from "'@/hooks/useLanguage'";
import { useFontForLanguage } from "'@/hooks/useFontForLanguage'";
import clsx from 'clsx';
import styles from './News.module.scss';
import { useTheme } from "'@/hooks/useTheme'";
import Section from '../section/Section';

type newsContentType = {
  header: string;
  descriptiom: string;
  button: string;
};

const News = () => {
  const newsContent = useLanguage({
    resourse: 'main',
    translationName: 'main.news',
  }) as newsContentType;

  const theme = useTheme();
  const font = useFontForLanguage();

  return (
    <Section className={clsx(styles.news, theme === 'light' && styles.light)}>
      <div className={styles.container}>
        <h2 className={font}>{newsContent.header.toUpperCase()}</h2>
        <p>{newsContent.descriptiom}</p>
        <NewsSwiper buttonText={newsContent.button} />
      </div>
    </Section>
  );
};

export default News;

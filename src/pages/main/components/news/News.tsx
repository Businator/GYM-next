"use client";

import React from "react";
import { NewsSwiper } from "./components/NewsSwiper/NewsSwiper";

import { useLanguage } from "'@/hooks/useLanguage'";
import { chooseLanguage } from "'@/utils/chooseLanguage'";
import clsx from "clsx";
import styles from "./News.module.scss";
import { useTheme } from "'@/hooks/useTheme'";
import { Section } from "../section/Section";

type newsContentType = {
  header: string;
  descriptiom: string;
  button: string;
};

export const News = () => {
  const newsContent = useLanguage({
    resourse: "main",
    translationName: "main.news",
  }) as newsContentType;

  const theme = useTheme();

  return (
    <Section className={styles.news}>
      <div
        className={clsx(styles.container, theme === "light" && styles.light)}
      >
        <h2 className={chooseLanguage()}>{newsContent.header.toUpperCase()}</h2>
        <p>{newsContent.descriptiom}</p>
        <NewsSwiper buttonText={newsContent.button} />
      </div>
    </Section>
  );
};

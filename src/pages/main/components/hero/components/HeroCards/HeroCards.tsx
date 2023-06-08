import React from "react";
import { SwiperSlide } from "swiper/react";

import { useChooseLanguage } from "'@/hooks/useChooseLanguage'";
import clsx from "clsx";
import { useTheme } from "'@/hooks/useTheme'";
import styles from "./HeroCards.module.scss";

export const HeroCards = ({
  headers,
  description,
}: {
  headers: string[];
  description: string;
}) => {
  const theme = useTheme();
  const language = useChooseLanguage();

  const addLineBreak = (text: string) => {
    const words = text.split(" ");
    if (words.length > 2) {
      return (
        <>
          {words[0]} <br />
          {words.slice(1).join(" ")}
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
            className={clsx(styles.card, theme === "light" && styles.light)}
          >
            <h1 className={language}>{addLineBreak(header.toUpperCase())}</h1>
            <p>{description}</p>
          </SwiperSlide>
        );
      })}
    </>
  );
};

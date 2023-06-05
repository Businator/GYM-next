import React from "react";
import { SwiperSlide } from "swiper/react";

import styles from "./HeroCards.module.scss";
import { chooseLanguage } from "'@/utils/chooseLanguage'";

export const HeroCards = ({
  headers,
  description,
}: {
  headers: string[];
  description: string;
}) => {
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
          <SwiperSlide key={index} className={styles.card}>
            <h1 className={chooseLanguage()}>
              {addLineBreak(header.toUpperCase())}
            </h1>
            <p>{description}</p>
          </SwiperSlide>
        );
      })}
    </>
  );
};

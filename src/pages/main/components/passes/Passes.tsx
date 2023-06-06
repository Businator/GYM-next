"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { PassesSwitch } from "./components/PassesSwitch/PassesSwitch";
import { MySwiper } from "'@/components/MySwiper/MySwiper'";
import { Cards, cardsType } from "./components/Cards/Cards";
import stylesForButtons from "./assets/styles/SwiperButtons.module.scss";
import styles from "./Passes.module.scss";
import { useLanguage } from "'@/hooks/useLanguage'";
import { chooseLanguage } from "'@/utils/chooseLanguage'";
import { Section } from "../section/Section";

type passesContentType = {
  header: string;
  switches: string[];
  cards: cardsType;
  button: string;
};

export const Passes = () => {
  const [isYearly, setIsYearly] = useState(false);

  const passesContent = useLanguage({
    resourse: "main",
    translationName: "main.passes",
  }) as passesContentType;

  return (
    <Section>
      <h2 className={clsx([chooseLanguage(), styles.header])}>
        {passesContent.header.toUpperCase()}
      </h2>
      <PassesSwitch
        switchState={[isYearly, setIsYearly]}
        switchesText={passesContent.switches}
      />
      <div className={styles.swiperContainer}>
        <MySwiper
          style={{ height: 400 }}
          slidesPerView={document.documentElement.scrollWidth < 768 ? 1 : 2}
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

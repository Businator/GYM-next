"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { MySwiper } from "'@/components/MySwiper/MySwiper'";
import { coachesList } from "./mocks/coahesList";
import stylesForButtom from "./assets/styles/SwiperButtons.module.scss";
import { showNumberOfCards } from "'@/utils/showNumberOfCards'";
import { useLanguage } from "'@/hooks/useLanguage'";
import { chooseLanguage } from "'@/utils/chooseLanguage'";
import clsx from "clsx";
import { useTheme } from "'@/hooks/useTheme'";
import styles from "./Coaches.module.scss";
import { Section } from "../section/Section";

type coachesContentType = {
  header: string;
  description: string;
};

export const Coaches = () => {
  const [numberOfCards, setNumberOfCards] = useState(0);
  const theme = useTheme();

  const coachesContent = useLanguage({
    resourse: "main",
    translationName: "main.coaches",
  }) as coachesContentType;

  useEffect(() => {
    setNumberOfCards(showNumberOfCards());
  }, []);

  return (
    <Section>
      <h2 className={chooseLanguage()}>
        {coachesContent.header.toUpperCase()}
      </h2>
      <p>{coachesContent.description}</p>
      <div className={styles.swiperContainer}>
        <MySwiper
          slidesPerView={numberOfCards}
          spaceBetween={10}
          modules={[Pagination]}
          useButtons={true}
          stylesForButtons={stylesForButtom.buttonContainer}
        >
          {coachesList.map((coach) => {
            return (
              <SwiperSlide
                key={coach.id}
                className={clsx(styles.card, theme === "light" && styles.light)}
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

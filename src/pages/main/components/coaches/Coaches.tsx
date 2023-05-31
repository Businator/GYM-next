"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { integral } from "'@/assets/fonts/fonts'";
import { MySwiper } from "'@/components/MySwiper/MySwiper'";
import { coachesList } from "./mocks/coahesList";
import styles from "./Coaches.module.scss";
import stylesForButtom from "./assets/styles/SwiperButtons.module.scss";
import { showNumberOfCards } from "'@/utils/showNumberOfCards'";

const Card = () => {
  return coachesList.map((coach) => {
    return (
      <SwiperSlide key={coach.id} className={styles.card}>
        <Image src={coach.img} alt={coach.name} />
        <div>
          <h3>{coach.name}</h3>
          <p>{coach.spec.toUpperCase()}</p>
        </div>
      </SwiperSlide>
    );
  });
};

export const Coaches = () => {
  const [numberOfCards, setNumberOfCards] = useState(0);

  useEffect(() => {
    setNumberOfCards(showNumberOfCards());
  }, []);

  return (
    <section>
      <h2 className={integral.className}>OUR BEST COACHES</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        voluptate atque sapiente quia.
      </p>
      <div className={styles.swiperContainer}>
        <MySwiper
          slidesPerView={numberOfCards}
          spaceBetween={10}
          modules={[Pagination]}
          useButtons={true}
          stylesForButtons={stylesForButtom.buttonContainer}
        >
          {Card()}
        </MySwiper>
      </div>
    </section>
  );
};

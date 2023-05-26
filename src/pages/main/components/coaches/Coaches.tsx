"use client";

import React from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { integral } from "'@/assets/fonts/fonts'";
import { MySwiper } from "'@/components/MySwiper/MySwiper'";
import { coachesList } from "./mocks/coahesList";
import styles from "./Coaches.module.scss";
import { Pagination } from "swiper";

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
  console.log();
  return (
    <section>
      <h2 className={integral.className}>OUR BEST COACHES</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        voluptate atque sapiente quia.
      </p>
      <div className={styles.swiperContainer}>
        <MySwiper
          slidesPerView={document.documentElement.scrollWidth < 768 ? 2 : 3}
          spaceBetween={10}
          children={Card()}
          modules={[Pagination]}
        />
      </div>
    </section>
  );
};

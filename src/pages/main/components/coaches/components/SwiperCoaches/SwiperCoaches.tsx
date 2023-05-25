"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import Image from "next/image";

import { MySwiper } from "'@/components/swiper/MySwiper'";
import { Coach, coachesList } from "../../mocks/coahesList";
import styles from "./SwiperCoaches.module.scss";

const Card = (coachs: Coach[]) => {
  return coachs.map((coach) => {
    return (
      <SwiperSlide className={styles.card}>
        <Image src={coach.img} alt={coach.name} />
        <div>
          <h3>{coach.name}</h3>
          <p>{coach.spec.toUpperCase()}</p>
        </div>
      </SwiperSlide>
    );
  });
};

export const SwiperCoaches = () => {
  return (
    <div className={styles.swiperContainer}>
      <MySwiper
        slidesPerView={3}
        spaceBetween={10}
        children={Card(coachesList)}
        usePagination={true}
      />
    </div>
  );
};

{
  /* <Swiper
  slidesPerView={3}
  spaceBetween={10}
  pagination={{
    clickable: true,
    bulletClass: styles.bullet,
    bulletActiveClass: styles.bulletActive,
  }}
  modules={[Pagination]}
>
  {coachesList.map((coach) => {
    return (
      <SwiperSlide key={coach.id} className={styles.card}>
        
      </SwiperSlide>
    );
  })}
</Swiper>; */
}

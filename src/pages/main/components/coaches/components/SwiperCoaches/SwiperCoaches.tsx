"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import Image from "next/image";

import thor from "../../assets/images/Thor.jpg";
import capitanAmerica from "../../assets/images/Capitan-America.jpg";
import superman from "../../assets/images/Sups.jpg";
import capitanMarvel from "../../assets/images/Capitan-Marvel.jpeg";
import widow from "../../assets/images/Widow.jpeg";
import wonderWoman from "../../assets/images/Wonder-woman.jpeg";

import styles from "./SwiperCoaches.module.scss";

const coachesList = [
  {
    id: 1,
    name: "Thor",
    img: thor,
    spec: "crossfit",
  },
  {
    id: 2,
    name: "Wonder Woman",
    img: wonderWoman,
    spec: "crossfit",
  },
  {
    id: 3,
    name: "Superman",
    img: superman,
    spec: "powerlifting",
  },
  {
    id: 4,
    name: "Black Widow",
    img: widow,
    spec: "stretching",
  },

  {
    id: 5,
    name: "Capitan Marvel",
    img: capitanMarvel,
    spec: "open gym",
  },
  {
    id: 6,
    name: "Capitan America",
    img: capitanAmerica,
    spec: "crossfit",
  },
];

export const SwiperCoaches = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
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
              <Image src={coach.img} alt={coach.name} />
              <div>
                <h3>{coach.name}</h3>
                <p>{coach.spec.toUpperCase()}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

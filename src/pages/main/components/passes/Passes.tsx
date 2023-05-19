"use client";

import React from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Pagination } from "swiper";
import { MySwitch } from "'@/components/UI/switch/MySwitch'";
import { Button } from "'@/components/UI/button/Button'";
import { integral } from "'@/assets/fonts/fonts'";
import passes from "./mocks/passes.json";
import styles from "./Passes.module.scss";

export const Passes = () => {
  return (
    <section>
      <h2 className={clsx([integral.className, styles.header])}>
        OUR GYM PASSES
      </h2>
      <MySwitch />
      <div className={styles.swiperContainer}>
        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          style={{
            height: 350,
            "--swiper-theme-color": "white",
            "--swiper-pagination-bullet-inactive-color": "gray",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
        >
          {passes.map((card) => {
            return (
              <SwiperSlide key={card.id} className={styles.card}>
                <div>
                  <h3 className={integral.className}>
                    {card.title.toUpperCase()}
                  </h3>
                  <span className={styles.price}>
                    {String(card.price.month)}
                  </span>
                  <span>$/MO</span>
                </div>
                <ul>
                  {card.decription.map((description, index) => {
                    return (
                      <li className={styles.description} key={index}>
                        {description}
                      </li>
                    );
                  })}
                </ul>
                <Button>PUCHASE NOW</Button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex gap-8"></div>
    </section>
  );
};

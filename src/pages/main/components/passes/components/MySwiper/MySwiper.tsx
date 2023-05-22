import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

import { integral } from "'@/assets/fonts/fonts'";
import { Button } from "'@/components/UI/button/Button'";
import { SwiperButtons } from "./components/SwiperButtons/SwiperButtons";

import passes from "../../mocks/passes.json";
import styles from "./MySwiper.module.scss";

export const MySwiper = ({ isYearly }: { isYearly: boolean }) => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={2}
        spaceBetween={100}
        pagination={{
          clickable: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }}
        modules={[Pagination]}
        style={{
          height: 400,
        }}
      >
        {passes.map((card, index) => {
          return (
            <SwiperSlide key={card.id} className={styles.card}>
              <div>
                <h3 className={integral.className}>
                  {card.title.toUpperCase()}
                </h3>
                <span className={styles.price}>
                  {isYearly
                    ? String(card.price.yaer)
                    : String(card.price.month)}
                </span>
                <span>$/{isYearly ? "YE" : "MO"}</span>
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
              {index % 2 || index === 2 ? (
                <span className={styles.border}></span>
              ) : (
                ""
              )}
            </SwiperSlide>
          );
        })}
        <SwiperButtons />
      </Swiper>
    </div>
  );
};

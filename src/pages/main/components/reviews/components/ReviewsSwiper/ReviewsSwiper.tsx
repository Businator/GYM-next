"use client";

import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { capitalize } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/effect-cards";

import { reviewsList } from "../../mocks/reviewsList";
import { integral } from "'@/assets/fonts/fonts'";
import styles from "./ReviewsSwiper.module.scss";
import clsx from "clsx";
import { SwiperButtons } from "./components/SwiperButtons/SwiperButtons";

export const ReviewsSwiper = () => {
  return (
    <div className={styles.container}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        slidesPerView={1}
        modules={[EffectCards]}
      >
        {reviewsList.map((review, index, array) => {
          return (
            <SwiperSlide key={review.id} className={styles.card}>
              <span className={clsx([integral.className, styles.pagination])}>
                {index + 1}/{array.length}
              </span>
              <div>
                <span>
                  <FaQuoteLeft />
                </span>
                <p className={integral.className}>{review.review}</p>
              </div>

              <div className={styles.client}>
                <Image src={review.user.img} alt={review.user.name} />
                <div>
                  <p className={integral.className}>{review.user.name}</p>
                  <p>{capitalize(review.user.post)}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div>
          <SwiperButtons />
        </div>
      </Swiper>
    </div>
  );
};

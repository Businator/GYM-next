import React from "react";
import { reviewsList } from "../../mocks/reviewsList";
import { SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { integral } from "'@/assets/fonts/fonts'";
import Image from "next/image";
import { capitalize } from "@mui/material";
import clsx from "clsx";

import styles from "./ReviewsCards.module.scss";

export const ReviewsCards = () => {
  return reviewsList.map((review, index, array) => {
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
  });
};

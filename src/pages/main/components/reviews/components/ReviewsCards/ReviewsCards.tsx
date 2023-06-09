import React from "react";
import { SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { capitalize } from "@mui/material";
import clsx from "clsx";

import { useFontForLanguage } from "'@/hooks/useFontForLanguage'";

import wick from "../../assets/image/john-wick.jpg";
import toretto from "../../assets/image/dominic-toretto.jpg";
import rock from "../../assets/image/the-rock.jpg";
import scott from "../../assets/image/michael-scott.jpg";

import styles from "./ReviewsCards.module.scss";

export type cardType = {
  user: string;
  status: string;
  review: string;
};

export const ReviewsCards = (cards: cardType[]) => {
  const showImage = (index: number) => {
    switch (index) {
      case 0:
        return wick;
      case 1:
        return toretto;
      case 2:
        return rock;
      case 3:
        return scott;

      default:
        return wick;
    }
  };
  const font = useFontForLanguage();

  return cards.map((card, index, array) => {
    return (
      <SwiperSlide key={index} className={styles.card}>
        <span className={clsx([font, styles.pagination])}>
          {index + 1}/{array.length}
        </span>
        <div>
          <span>
            <FaQuoteLeft />
          </span>
          <p className={font}>{card.review}</p>
        </div>

        <div className={styles.client}>
          <Image src={showImage(index)} alt={"user foto"} />
          <div>
            <p className={font}>{capitalize(card.user)}</p>
            <p>{capitalize(card.status)}</p>
          </div>
        </div>
      </SwiperSlide>
    );
  });
};

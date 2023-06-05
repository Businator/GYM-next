"use client";

import Image from "next/image";
import React from "react";
import imageForReviews from "./assets/image/gym-man-woman-workout-fitness.jpg";
import { ReviewsSwiper } from "./components/ReviewsSwiper/ReviewsSwiper";
import { useLanguage } from "'@/hooks/useLanguage'";
import { cardType } from "./components/ReviewsCards/ReviewsCards";
import { chooseLanguage } from "'@/utils/chooseLanguage'";

type reviewsContentType = {
  header: string;
  cards: cardType[];
};

export const Reviews = () => {
  const reviewsContent = useLanguage({
    resourse: "main",
    translationName: "main.reviews",
  }) as reviewsContentType;

  return (
    <section>
      <h2 className={chooseLanguage()}>
        {reviewsContent.header.toUpperCase()}
      </h2>
      <Image src={imageForReviews} alt="a woman and a man train" />
      <ReviewsSwiper cards={reviewsContent.cards} />
    </section>
  );
};

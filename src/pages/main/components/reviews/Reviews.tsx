import Image from "next/image";
import React from "react";
import imageForReviews from "./assets/image/gym-man-woman-workout-fitness.jpg";
import { integral } from "'@/assets/fonts/fonts'";
import { ReviewsSwiper } from "./components/ReviewsSwiper/ReviewsSwiper";

export const Reviews = () => {
  return (
    <section>
      <h2 className={integral.className}>REVIEWS FROM CLIENTS</h2>
      <Image src={imageForReviews} alt="a woman and a man train" />
      <ReviewsSwiper />
    </section>
  );
};

"use client";
import React from "react";
import clsx from "clsx";
import Marquee from "react-fast-marquee";
import { GiDeathStar } from "react-icons/gi";
import { MySwiper } from "'@/components/MySwiper/MySwiper'";
import { Button } from "'@/UI/button/Button'";
import { LinkWithArrow } from "'@/UI/link/LinkWithArrow'";
import { HeroCards } from "./components/HeroCards/HeroCards";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { chooseLanguage } from "'@/utils/chooseLanguage'";
import styles from "./Hero.module.scss";
import { useLanguage } from "'@/hooks/useLanguage'";

type heroContentType = {
  header: string[];
  description: string;
  button: string;
  link: string;
  marquee: string[];
};

export const Hero = () => {
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;

  const heroContent = useLanguage({
    resourse: "main",
    translationName: "main.hero",
  }) as heroContentType;

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.swiperContainer}>
          <MySwiper slidesPerView={1} useButtons={true}>
            {HeroCards({
              headers: heroContent.header,
              description: heroContent.description,
            })}
          </MySwiper>
          <div className={styles.buttonsContainer}>
            <Button>{heroContent.button.toUpperCase()}</Button>
            <LinkWithArrow children={heroContent.link.toUpperCase()} />
          </div>
        </div>
      </div>
      <Marquee className={styles.marqueeContainer}>
        <div className={clsx([chooseLanguage(), styles.marquee])}>
          {heroContent.marquee.map((text, index) => {
            return (
              <span
                className={clsx(
                  searchParams.get("lang") === "en" ? "mb-[2px]" : "mt-[4px]"
                )}
                key={index}
              >
                {text}
                <GiDeathStar />
              </span>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
};

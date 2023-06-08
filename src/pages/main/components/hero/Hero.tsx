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
import { useChooseLanguage } from "'@/hooks/useChooseLanguage'";
import styles from "./Hero.module.scss";
import { useLanguage } from "'@/hooks/useLanguage'";
import { Section } from "../section/Section";

type heroContentType = {
  header: string[];
  description: string;
  button: string;
  link: string;
  marquee: string[];
};

export const Hero = () => {
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;
  const language = useChooseLanguage();

  const heroContent = useLanguage({
    resourse: "main",
    translationName: "main.hero",
  }) as heroContentType;

  return (
    <Section className={styles.hero}>
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
            <LinkWithArrow>{heroContent.link.toUpperCase()}</LinkWithArrow>
          </div>
        </div>
      </div>
      <Marquee className={styles.marqueeContainer}>
        <div className={clsx([language, styles.marquee])}>
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
    </Section>
  );
};

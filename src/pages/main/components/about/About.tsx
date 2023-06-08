"use client";

import React from "react";
import Image from "next/image";
import aboutImg from "./assets/image/about.jpg";
import aboutCircOne from "./assets/image/about-circ-1.jpg";
import aboutCircTwo from "./assets/image/about-circ-2.jpg";
import styles from "./About.module.scss";
import { Button } from "'@/UI/button/Button'";
import { useLanguage } from "'@/hooks/useLanguage'";
import { useChooseLanguage } from "'@/hooks/useChooseLanguage'";
import { capitalize } from "@mui/material";
import { Section } from "../section/Section";

type aboutContentType = {
  header: string;
  description: string;
  cards: {
    title: string;
    description: string;
  }[];
};

export const About = () => {
  const aboutContent = useLanguage({
    resourse: "main",
    translationName: "main.about",
  }) as aboutContentType;
  const language = useChooseLanguage();

  return (
    <Section>
      <h2 className={language}>{aboutContent.header.toUpperCase()}</h2>
      <Image src={aboutImg} alt="A man with a dumbbell" />
      <div className={styles.description}>
        <p>{aboutContent.description}</p>
        <Button>10 YEARS</Button>
      </div>
      <div className={styles.content}>
        <div className={styles.circs}>
          <div className={styles.cirgBg}>
            <Image
              src={aboutCircOne}
              alt="man training"
              className={styles.circImg}
            />
          </div>
          <div className={styles.cirgBg}>
            <Image
              src={aboutCircTwo}
              alt="woman training"
              className={styles.circImg}
            />
          </div>
        </div>
        <div className={styles.contentDescription}>
          {aboutContent.cards.map((card, index) => {
            return (
              <div key={index}>
                <h3>{capitalize(card.title)}</h3>
                <p>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

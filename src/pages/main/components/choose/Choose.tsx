"use client";

import Image from "next/image";
import React from "react";
import { TiFlashOutline } from "react-icons/ti";
import bottle from "./assets/image/bottle.png";
import dumbbell from "./assets/image/dumbbell.png";
import exspander from "./assets/image/exspander.png";
import { LinkWithArrow } from "'@/UI/link/LinkWithArrow'";

import styles from "./Choose.module.scss";
import { useLanguage } from "'@/hooks/useLanguage'";
import { chooseLanguage } from "'@/utils/chooseLanguage'";

type chooseContentType = {
  header: string;
  cards: {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];
};

export const Choose = () => {
  const chooseContent = useLanguage({
    resourse: "main",
    translationName: "main.choose",
  }) as chooseContentType;

  return (
    <section>
      <h2 className={chooseLanguage()}>{chooseContent.header.toUpperCase()}</h2>
      <div className={styles.container}>
        {chooseContent.cards.map((card, index) => {
          return (
            <div key={index} className={styles.card}>
              <Image
                alt="training apparatus"
                src={index === 0 ? dumbbell : index === 1 ? exspander : bottle}
                width={100}
                height={100}
              />
              <h3 className={chooseLanguage()}>{card.title.toUpperCase()}</h3>
              <p>{card.description}</p>
              <div>
                <LinkWithArrow children={card.link.toUpperCase()} />
                <span className={styles.flash}>
                  <TiFlashOutline />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

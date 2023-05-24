import Image from "next/image";
import React from "react";
import { TiFlashOutline } from "react-icons/ti";
import bottle from "./assets/image/bottle.png";
import dumbbell from "./assets/image/dumbbell.png";
import exspander from "./assets/image/exspander.png";
import { LinkWithArrow } from "'@/components/UI/link/LinkWithArrow'";
import { integral } from "../../../../assets/fonts/fonts";

import styles from "./Choose.module.scss";

const data = [
  {
    id: 1,
    header: "MUSCLE BUILDING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus repellendus similique vero illum sed totam soluta voluptas",
    img: dumbbell,
  },
  {
    id: 2,
    header: "MUSCLE BUILDING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus repellendus similique vero illum sed totam soluta voluptas",
    img: exspander,
  },
  {
    id: 3,
    header: "MUSCLE BUILDING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus repellendus similique vero illum sed totam soluta voluptas",
    img: bottle,
  },
];

export const Choose = () => {
  return (
    <section>
      <h2 className={integral.className}>WHY CHOOSE US</h2>
      <div className={styles.container}>
        {data.map((element) => {
          return (
            <div key={element.id} className={styles.card}>
              <Image
                alt={element.img.src}
                src={element.img}
                width={100}
                height={100}
              />
              <h3 className={integral.className}>{element.header}</h3>
              <p>{element.description}</p>
              <div>
                <LinkWithArrow />
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

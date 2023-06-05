import { SwiperSlide } from "swiper/react";
import { Button } from "'@/UI/button/Button'";
import styles from "./Cards.module.scss";
import { chooseLanguage } from "'@/utils/chooseLanguage'";

export type cardsType = {
  title: string;
  decription: string[];
  price: {
    month: number;
    yaer: number;
  };
}[];

export const Cards = ({
  isYearly,
  cards,
  buttonChild,
}: {
  isYearly: boolean;
  cards: cardsType;
  buttonChild: string;
}) => {
  return cards.map((card, index) => {
    return (
      <SwiperSlide key={index} className={styles.card}>
        <div>
          <h3 className={chooseLanguage()}>{card.title.toUpperCase()}</h3>
          <span className={styles.price}>
            {isYearly ? String(card.price.yaer) : String(card.price.month)}
          </span>
          <span>$/{isYearly ? "YE" : "MO"}</span>
        </div>
        <ul>
          {card.decription.map((description, index) => {
            return (
              <li className={styles.description} key={index}>
                {description}
              </li>
            );
          })}
        </ul>
        <Button>{buttonChild.toUpperCase()}</Button>
        {index % 2 || index === 2 ? (
          <span className={styles.border}></span>
        ) : (
          ""
        )}
      </SwiperSlide>
    );
  });
};

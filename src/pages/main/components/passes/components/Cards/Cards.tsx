import { SwiperSlide } from "swiper/react";
import passes from "../../mocks/passes.json";
import { integral } from "'@/assets/fonts/fonts'";
import { Button } from "'@/UI/button/Button'";
import styles from "./Cards.module.scss";

export const Cards = (isYearly: boolean) => {
  return passes.map((card, index) => {
    return (
      <SwiperSlide key={card.id} className={styles.card}>
        <div>
          <h3 className={integral.className}>{card.title.toUpperCase()}</h3>
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
        <Button>PUCHASE NOW</Button>
        {index % 2 || index === 2 ? (
          <span className={styles.border}></span>
        ) : (
          ""
        )}
      </SwiperSlide>
    );
  });
};

import { SwiperSlide } from 'swiper/react';
import { Button } from "'@/UI/button/Button'";
import { useFontForLanguage } from "'@/hooks/useFontForLanguage'";
import clsx from 'clsx';
import { useTheme } from "'@/hooks/useTheme'";
import styles from './Cards.module.scss';

export type cardsType = {
  title: string;
  decription: string[];
  price: {
    month: number;
    yaer: number;
  };
}[];

const Cards = ({
  isYearly,
  cards,
  buttonChild,
}: {
  isYearly: boolean;
  cards: cardsType;
  buttonChild: string;
}) => {
  const theme = useTheme();
  const font = useFontForLanguage();

  return cards.map((card, index) => {
    return (
      <SwiperSlide
        key={index}
        className={clsx(styles.card, theme === 'light' && styles.light)}
      >
        <div>
          <h3 className={font}>{card.title.toUpperCase()}</h3>
          <span className={styles.price}>
            {isYearly ? String(card.price.yaer) : String(card.price.month)}
          </span>
          <span>$/{isYearly ? 'YE' : 'MO'}</span>
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
          ''
        )}
      </SwiperSlide>
    );
  });
};

export default Cards;

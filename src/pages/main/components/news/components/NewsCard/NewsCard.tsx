import React, { useEffect, useState } from "react";
import { NewsList, workWithNews } from "../../API/NewsApi";
import { SwiperSlide } from "swiper/react";
import { LinkWithArrow } from "'@/UI/link/LinkWithArrow'";

import clsx from "clsx";
import { integral } from "'@/assets/fonts/fonts'";
import styles from "./NewsCard.module.scss";

export const NewsCard = () => {
  const [news, setNews] = useState({} as NewsList);

  useEffect(() => {
    const getNews = async () => {
      const data = await workWithNews.getNews();
      setNews(data);
    };

    getNews();
  }, []);

  return (
    news.response &&
    news.response.results.map((res) => {
      return (
        <SwiperSlide key={res.webTitle} className={styles.card}>
          <img
            src={res.fields.thumbnail}
            alt="plug for image"
            className={styles.image}
          />
          <p className={styles.title}>{res.webTitle}</p>
          <LinkWithArrow
            children="READ MORE"
            href={res.webUrl}
            target="_blank"
            className={clsx([integral.className, styles.link])}
          />
        </SwiperSlide>
      );
    })
  );
};

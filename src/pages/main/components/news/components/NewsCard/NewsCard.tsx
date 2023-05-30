import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { SwiperSlide } from "swiper/react";
import { LinkWithArrow } from "'@/UI/link/LinkWithArrow'";
import { NewsList, workWithNews } from "../../API/NewsApi";
import plug from "../../assets/image/plug.jpg";
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
          <Image
            loader={() => res.fields.thumbnail}
            src={plug}
            alt="image from news"
            className={styles.image}
            width={200}
            height={100}
          />
          <p className={styles.title}>{res.webTitle}</p>
          <LinkWithArrow
            href={res.webUrl}
            target="_blank"
            className={clsx([integral.className, styles.link])}
          >
            READ MORE
          </LinkWithArrow>
        </SwiperSlide>
      );
    })
  );
};

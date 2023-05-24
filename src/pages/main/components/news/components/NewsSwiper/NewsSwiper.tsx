"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { ImArrowUpRight } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import { NewsList, workWithNews } from "../../API/NewsApi";
import { integral } from "'@/assets/fonts/fonts'";

import styles from "./NewsSwiper.module.scss";

export const NewsSwiper = () => {
  const [news, setNews] = useState({} as NewsList);

  useEffect(() => {
    const getNews = async () => {
      const data = await workWithNews.getNews();
      setNews(data);
    };

    getNews();
  }, []);

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }}
        modules={[Pagination]}
        style={{
          height: 400,
        }}
      >
        {news.response &&
          news.response.results.map((res) => {
            return (
              <SwiperSlide key={res.webTitle} className={styles.card}>
                <img
                  src={res.fields.thumbnail}
                  alt="plug for image"
                  className={styles.image}
                />
                <p className={styles.title}>{res.webTitle}</p>
                <Link
                  href={res.webUrl}
                  target="_blank"
                  className={clsx([integral.className, styles.link])}
                >
                  READ MORE
                  <span>
                    <ImArrowUpRight />
                  </span>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ImArrowUpRight } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import { NewsList, workWithNews } from "../../API/NewsApi";
import { Button } from "'@/components/UI/button/Button'";
import { integral } from "'@/assets/fonts/fonts'";
import plugImg from "./assets/images/plug.jpg";

import styles from "./NewsSwiper.module.scss";

export const NewsSwiper = () => {
  const [news, setNews] = useState({} as NewsList);
  const [imageErrors, setImageErrors] = useState([] as unknown as number[]);

  const handleImageError = (index: number) => {
    setImageErrors((prevState) => [...prevState, index]);
  };

  useEffect(() => {
    const getNews = async () => {
      const articles = await workWithNews.getNews();
      setNews(articles);
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
        {news.articles &&
          news.articles.map((article, index) => {
            return (
              <SwiperSlide key={article.title} className={styles.card}>
                {!imageErrors.includes(index) && article.urlToImage ? (
                  <Image
                    src={article.urlToImage}
                    alt={`image from ${article.source.name}`}
                    className={styles.image}
                    width={300}
                    height={100}
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <Image
                    src={plugImg}
                    alt="plug for image"
                    className={styles.image}
                  />
                )}
                <Button>PERSONAL</Button>
                <p className={styles.title}>{article.title}</p>
                <Link
                  href={"/"}
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

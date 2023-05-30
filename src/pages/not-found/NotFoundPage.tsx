"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { integral } from "'@/assets/fonts/fonts'";
import image404 from "./assets/image/404.jpg";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1 className={integral.className}>Not Found</h1>
          <p>Could not find requested resource</p>
          <p>
            Go <button onClick={() => router.back()}>back</button>
          </p>
        </div>
        <div>
          <Image src={image404} alt="404" />
        </div>
      </div>
    </div>
  );
};

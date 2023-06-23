"use client";

import React from "react";
import {
  BsGithub,
  BsInstagram,
  BsTelegram,
  BsTelephoneFill,
} from "react-icons/bs";
import { Logo } from "../logo/Logo";
import { capitalize } from "@mui/material";
import { useLanguage } from "'@/hooks/useLanguage'";
import { useTheme } from "'@/hooks/useTheme'";
import clsx from "clsx";
import styles from "./Footer.module.scss";
import { GrMail } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Switches } from "./components/Switches/Switches";

type footerContentType = {
  description: string;
  city: string;
};

const Footer = () => {
  const footerContent = useLanguage({
    resourse: "footer",
    translationName: "footer",
  }) as footerContentType;

  const theme = useTheme();

  return (
    <footer className={clsx(styles.footer, theme === "light" && styles.light)}>
      <div className={styles.headerBox}>
        <Logo />
        <p>{footerContent.description}</p>
        <Switches />
      </div>
      <ul className={styles.contacts}>
        <li>
          <a href="https://github.com/Businator" target="_blank">
            <span>
              <BsGithub />
            </span>
            Businator
          </a>
        </li>
        <li>
          <a href="tel:+79179776168">
            <span>
              <BsTelephoneFill />
            </span>
            +7 917 977 61 68
          </a>
        </li>
        <li>
          <a href="https://telegram.im/@Businator163" target="_blank">
            <span>
              <BsTelegram />
            </span>
            @Businator163
          </a>
        </li>
        <li>
          <a href="mailto:deniullov@gmail.com">
            <span>
              <GrMail />
            </span>
            deniullov@gmail.com
          </a>
        </li>
        <li>
          <a href="https://goo.gl/maps/WLy2UWaYUhq1xYmd8" target="_blank">
            <span>
              <FaMapMarkerAlt />
            </span>
            {footerContent.city}
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

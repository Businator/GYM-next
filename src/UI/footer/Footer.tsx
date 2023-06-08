"use client";

import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { Logo } from "../logo/Logo";
import { capitalize } from "@mui/material";
import { useLanguage } from "'@/hooks/useLanguage'";
import { useTheme } from "'@/hooks/useTheme'";
import clsx from "clsx";
import styles from "./Footer.module.scss";

type footerContentType = {
  description: string;
  sections: {
    title: string;
    list: string[];
  }[];
};

const Footer = () => {
  const footerContent = useLanguage({
    resourse: "footer",
    translationName: "footer",
  }) as footerContentType;

  const theme = useTheme();

  return (
    <footer className={clsx(styles.footer, theme === "light" && styles.light)}>
      <div>
        <Logo />
        <p>{footerContent.description}</p>
        <ul>
          <li>
            <a href="">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="">
              <BsInstagram />
            </a>
          </li>
        </ul>
      </div>
      <ul>
        {footerContent.sections.map((section, index) => {
          return (
            <li key={index}>
              <h4>{capitalize(section.title)}</h4>
              <ul>
                {section.list.map((item, index) => {
                  return (
                    <li key={index} className={styles.listItem}>
                      {capitalize(item)}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;

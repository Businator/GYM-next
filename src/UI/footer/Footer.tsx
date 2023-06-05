"use client";

import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import styles from "./Footer.module.scss";
import { Logo } from "../logo/Logo";
import "../../i18n/i18n";
import { capitalize } from "@mui/material";
import { useLanguage } from "'@/hooks/useLanguage'";

type footerContentType = {
  description: string;
  sections: {
    title: string;
    list: string[];
  }[];
};

export const Footer = () => {
  const footerContent = useLanguage({
    resourse: "footer",
    translationName: "footer",
  }) as footerContentType;

  return (
    <footer className={styles.footer}>
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
                  return <li key={index}>{capitalize(item)}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

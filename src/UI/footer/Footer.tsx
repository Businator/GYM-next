"use client";

import React, { useEffect } from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import styles from "./Footer.module.scss";
import { Logo } from "../logo/Logo";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

import "../../i18n/i18n";
import { capitalize } from "@mui/material";

type footerContentType = {
  description: string;
  sections: {
    title: string;
    list: string[];
  }[];
};

export const Footer = () => {
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;
  const { t, i18n } = useTranslation("footer");

  useEffect(() => {
    i18n.changeLanguage(searchParams.get("lang") as string | undefined);
  }, [searchParams]);

  const footerContent: footerContentType = t("footer", { returnObjects: true });

  console.log(footerContent);

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
        {footerContent.sections.map((section) => {
          return (
            <li>
              <h4>{capitalize(section.title)}</h4>
              <ul>
                {section.list.map((item) => {
                  return <li>{capitalize(item)}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
/* <li>
          <h4>About</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Vacancy</li>
          </ul>
        </li>
        <li>
          <h4>Services</h4>
          <ul>
            <li>How to work</li>
            <li>Works</li>
            <li>Price</li>
          </ul>
        </li>
        <li>
          <h4>Support</h4>
          <ul>
            <li>Contact us</li>
            <li>Our channel</li>
            <li>Instagram</li>
            <li>Telegram</li>
          </ul>
        </li>
        <li>
          <h4>FAQ</h4>
          <ul>
            <li>Payment</li>
            <li>Monthly day</li>
            <li>Work time</li>
            <li>More</li>
          </ul>
        </li> */

"use client";
import React from "react";

import { BsGithub, BsTelegram, BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from "'@/hooks/useLanguage'";
import { chooseLanguage } from "'@/utils/chooseLanguage'";
import styles from "./ContactsPage.module.scss";

type contactsContenttype = {
  header: string;
  location: string;
};

export const ContactsPage = () => {
  const contactsContent = useLanguage({
    resourse: "contacts",
    translationName: "contacts",
  }) as contactsContenttype;

  return (
    <section className={styles.contacts}>
      <div className={styles.container}>
        <h1 className={chooseLanguage()}>
          {contactsContent.header.toUpperCase()}
        </h1>
        <ul>
          <li>
            <a href="https://github.com/Businator" target="_blank">
              <span>
                <BsGithub />
              </span>
              https://github.com/Businator
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
              {contactsContent.location}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

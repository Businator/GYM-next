import React from "react";
import Link from "next/link";
import { capitalize } from "@mui/material";
import { Logo } from "../logo/Logo";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { MessengerAndSearchMenu } from "./components/MessengerAndSearchMenu/MessengerAndSearchMenu";
import styles from "./Header.module.scss";

const pageList = ["home", "shop", "app", "blog", "contact"];

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      {document.documentElement.scrollWidth < 768 ? (
        <MobileMenu pageList={pageList} />
      ) : (
        <>
          <ul>
            {pageList.map((page) => {
              return (
                <li key={page}>
                  <Link href={page}>{capitalize(page)}</Link>
                </li>
              );
            })}
          </ul>
          <MessengerAndSearchMenu />
        </>
      )}
    </header>
  );
};

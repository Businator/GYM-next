"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { capitalize } from "@mui/material";
import { Logo } from "../logo/Logo";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import styles from "./Header.module.scss";

export const pageList = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "shop",
    href: "shop",
  },
  {
    name: "app",
    href: "app",
  },
  {
    name: "blog",
    href: "blog",
  },
  {
    name: "contact",
    href: "contact",
  },
];

export const Header = () => {
  const pathname = usePathname();

  const isMobile = document.documentElement.scrollWidth < 768;

  return (
    <header className={styles.header}>
      <Logo />
      {!isMobile && (
        <ul>
          {pageList.map((page) => {
            return (
              <li key={page.name}>
                <Link
                  href={page.href}
                  className={clsx([
                    pathname === page.href ? styles.active : undefined,
                  ])}
                >
                  {capitalize(page.name)}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <MobileMenu pages={isMobile ? pageList : undefined} />
    </header>
  );
};

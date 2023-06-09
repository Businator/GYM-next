"use client";

import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { capitalize } from "@mui/material";
import { Logo } from "../logo/Logo";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";

import Link from "next/link";
import { useLanguage } from "'@/hooks/useLanguage'";
import { useTheme } from "'@/hooks/useTheme'";
import styles from "./Header.module.scss";

export type navigation = {
  name: string;
  href: string;
}[];

const Header = () => {
  const pathname = usePathname();
  const theme = useTheme();

  const pageList = useLanguage({
    resourse: "header",
    translationName: "navigation",
  }) as navigation;

  return (
    <header
      className={clsx(
        styles.header,
        pathname === "/" && styles.headerOnMain,
        theme === "light" && styles.light
      )}
    >
      <Logo />
      <nav className={clsx(styles.navigation)}>
        <ul>
          {pageList.map((page, index) => {
            return (
              <li key={index}>
                <Link
                  href={page.href}
                  className={clsx([
                    pathname === page.href ? styles.thisPage : undefined,
                  ])}
                >
                  {capitalize(page.name)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <MobileMenu pages={pageList} />
    </header>
  );
};

export default Header;

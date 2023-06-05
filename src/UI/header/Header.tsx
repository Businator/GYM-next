"use client";

import React, { useEffect } from "react";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from "next/navigation";
import clsx from "clsx";
import { capitalize } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Logo } from "../logo/Logo";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";

import styles from "./Header.module.scss";
import Link from "next/link";
import "../../i18n/i18n";

export type navigation = {
  name: string;
  href: string;
}[];

export const Header = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;

  const { t, i18n } = useTranslation("header");
  const pageList: navigation = t("navigation", { returnObjects: true });

  useEffect(() => {
    i18n.changeLanguage(searchParams.get("lang") as string | undefined);
  }, [searchParams]);

  return (
    <header
      className={clsx(styles.header, pathname === "/" && styles.headerOnMain)}
    >
      <Logo />
      <nav
        className={clsx(
          styles.navigation,
          document.documentElement.scrollWidth > 768 && styles.active
        )}
      >
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

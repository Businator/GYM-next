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
    href: "/shop",
  },
  {
    name: "app",
    href: "/app",
  },
  {
    name: "blog",
    href: "/blog",
  },
  {
    name: "contacts",
    href: "/contacts",
  },
];

export const Header = () => {
  const pathname = usePathname();

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
          {pageList.map((page) => {
            return (
              <li key={page.name}>
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

"use client";

import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.documentElement.scrollWidth < 768 && setIsMobile(true);
  }, []);

  return (
    <header className={clsx(styles.header, pathname === "/" && styles.abs)}>
      <Logo />
      {!isMobile && (
        <nav>
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
        </nav>
      )}
      <MobileMenu pages={isMobile ? pageList : undefined} />
    </header>
  );
};

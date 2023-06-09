"use client";
import React from "react";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";
import clsx from "clsx";
import styles from "./LinkWithArrow.module.scss";
import { useFontForLanguage } from "'@/hooks/useFontForLanguage'";

export const LinkWithArrow = ({
  href = "/",
  children = "LEARN MORE",
  ...rest
}) => {
  const font = useFontForLanguage();

  return (
    <Link {...rest} className={clsx([font, styles.link])} href={href}>
      {children}
      <span>
        <ImArrowUpRight2 />
      </span>
    </Link>
  );
};

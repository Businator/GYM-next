"use client";
import React from "react";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";
import clsx from "clsx";
import styles from "./LinkWithArrow.module.scss";
import { chooseLanguage } from "'@/utils/chooseLanguage'";

export const LinkWithArrow = ({
  href = "/",
  children = "LEARN MORE",
  ...rest
}) => {
  return (
    <Link
      {...rest}
      className={clsx([chooseLanguage(), styles.link])}
      href={href}
    >
      {children}
      <span>
        <ImArrowUpRight2 />
      </span>
    </Link>
  );
};

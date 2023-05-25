import Link from "next/link";
import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import clsx from "clsx";
import styles from "./LinkWithArrow.module.scss";
import { integral } from "'@/assets/fonts/fonts'";

export const LinkWithArrow = ({
  href = "/",
  children = "LEARN MORE",
  ...rest
}) => {
  return (
    <Link
      {...rest}
      className={clsx([integral.className, styles.link])}
      href={href}
    >
      {children}
      <span>
        <ImArrowUpRight2 />
      </span>
    </Link>
  );
};

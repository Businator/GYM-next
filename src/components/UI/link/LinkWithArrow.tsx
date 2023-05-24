import Link from "next/link";
import React from "react";
import { integral } from "../../../assets/fonts/fonts";
import { ImArrowUpRight2 } from "react-icons/im";
import clsx from "clsx";
import styles from "./LinkWithArrow.module.scss";

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

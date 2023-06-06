import Link from "next/link";
import React from "react";
import { integral } from "../../assets/fonts/fonts";
import { useTheme } from "'@/hooks/useTheme'";
import clsx from "clsx";

import styles from "./Logo.module.scss";

export const Logo = () => {
  const theme = useTheme();

  return (
    <Link
      className={clsx(integral.className, theme === "light" && styles.light)}
      href={"/"}
    >
      GYM
    </Link>
  );
};

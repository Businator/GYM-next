import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { ButtonBaseProps } from "@mui/material";
import { integral } from "'@/assets/fonts/fonts'";

export const Button = ({ children, className, ...rest }: ButtonBaseProps) => {
  return (
    <button
      className={clsx([styles.button, integral.className, className])}
      {...rest}
    >
      {children}
    </button>
  );
};

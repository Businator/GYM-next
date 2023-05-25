import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { ButtonBaseProps } from "@mui/material";
import { integral } from "'@/assets/fonts/fonts'";

export const Button = ({ children, ...rest }: ButtonBaseProps) => {
  return (
    <button className={clsx([styles.button, integral.className])} {...rest}>
      {children}
    </button>
  );
};

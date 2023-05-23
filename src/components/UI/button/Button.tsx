import React, { ButtonHTMLAttributes } from "react";
import { integral } from "../../../assets/fonts/fonts";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { ButtonBaseProps } from "@mui/material";

export const Button = ({ children, ...rest }: ButtonBaseProps) => {
  return (
    <button className={clsx([styles.button, integral.className])} {...rest}>
      {children}
    </button>
  );
};

"use client";

import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { ButtonBaseProps } from "@mui/material";
import { chooseLanguage } from "'@/utils/chooseLanguage'";

export const Button = ({ children, className, ...rest }: ButtonBaseProps) => {
  return (
    <button
      className={clsx([styles.button, chooseLanguage(), className])}
      {...rest}
    >
      {children}
    </button>
  );
};

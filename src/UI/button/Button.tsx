"use client";

import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { ButtonBaseProps } from "@mui/material";
import { useFontForLanguage } from "'@/hooks/useFontForLanguage'";

export const Button = ({ children, className, ...rest }: ButtonBaseProps) => {
  const font = useFontForLanguage();

  return (
    <button className={clsx([styles.button, font, className])} {...rest}>
      {children}
    </button>
  );
};

"use client";

import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { ButtonBaseProps } from "@mui/material";
import { useChooseLanguage } from "'@/hooks/useChooseLanguage'";

export const Button = ({ children, className, ...rest }: ButtonBaseProps) => {
  const language = useChooseLanguage();

  return (
    <button className={clsx([styles.button, language, className])} {...rest}>
      {children}
    </button>
  );
};

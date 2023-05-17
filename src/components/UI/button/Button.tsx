import React from "react";
import { integral } from "../../../../public/styles/fonts";
import clsx from "clsx";

import styles from "./Button.module.scss";

type ButtonType = {
  children: string;
};

export const Button = ({ children }: ButtonType) => {
  return (
    <button className={clsx([styles.button, integral.className])}>
      {children}
    </button>
  );
};

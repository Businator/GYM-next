import React from "react";
import { integral } from "../../../../public/styles/fonts";

import styles from "./Button.module.css";

type ButtonType = {
  children: string;
};

export const Button = ({ children }: ButtonType) => {
  return (
    <button className={`${styles.button} ${integral.className}`}>
      {children}
    </button>
  );
};

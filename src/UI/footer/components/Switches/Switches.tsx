import React from "react";
import { LanguageSwitch } from "./components/LanguageSwitch/LanguageSwitch";
import { ThemeSwitch } from "./components/ThemeSwitch/ThemeSwitch";
import styles from "./Switches.module.scss";
export const Switches = () => {
  return (
    <div className={styles.container}>
      <LanguageSwitch />
      <ThemeSwitch />
    </div>
  );
};

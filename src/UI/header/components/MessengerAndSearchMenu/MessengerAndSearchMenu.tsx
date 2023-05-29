import React from "react";
import { BsMessenger, BsSearch } from "react-icons/bs";
import styles from "./MessengerAndSearchMenu.module.scss";
export const MessengerAndSearchMenu = () => {
  return (
    <div className={styles.icons}>
      <span>
        <BsSearch />
      </span>
      <span>
        <BsMessenger />
      </span>
    </div>
  );
};

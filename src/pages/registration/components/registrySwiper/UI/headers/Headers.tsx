import React from "react";

import styles from "./Headers.module.scss";
import { integral } from "'@/assets/fonts/fonts'";

export const Headers = ({ h2, h3 }: { h2: string; h3: string }) => {
  return (
    <div className={styles.headers}>
      <h2 className={integral.className}>{h2}</h2>
      <h3 className={integral.className}>{h3}</h3>
    </div>
  );
};

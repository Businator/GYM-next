import React from "react";
import { MySkeleton } from "'@/UI/skeleton/MySkeleton'";

import styles from "./MainLoading.module.scss";

export const MainLoading = () => {
  return (
    <div className={styles.container}>
      <MySkeleton variant="rectangular" height={"90%"} />
    </div>
  );
};

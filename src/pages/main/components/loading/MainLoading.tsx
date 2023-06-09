import React from "react";
import { MySkeleton } from "'@/UI/skeleton/MySkeleton'";

import styles from "./MainLoading.module.scss";

const MainLoading = () => {
  return (
    <div className={styles.container}>
      <MySkeleton variant="rectangular" height={"90%"} />
    </div>
  );
};

export default MainLoading;

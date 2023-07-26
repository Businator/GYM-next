"use client";

import React from "react";
import { Skeleton, SkeletonProps } from "@mui/material";

import styles from "./MySkeleton.module.scss";

export const MySkeleton = (props: SkeletonProps) => {
  return (
    <div className={styles.container}>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={"100%"}
        animation="pulse"
        {...props}
      />
    </div>
  );
};

"use client";

import React from "react";
import { Skeleton, SkeletonProps } from "@mui/material";

export const MySkeleton = ({ props }: { props?: SkeletonProps }) => {
  return (
    <Skeleton
      variant="rectangular"
      width={"100%"}
      height={500}
      animation="pulse"
      sx={{
        backgroundColor: "gray",
      }}
      {...props}
    />
  );
};

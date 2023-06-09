"use client";

import { Skeleton } from "@mui/material";
import React from "react";
import styles from "./ContactsLoading.module.scss";

const ContactsLoading = () => {
  return (
    <div className={styles.container}>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={"100%"}
        animation="pulse"
        sx={{
          backgroundColor: "gray",
        }}
      />
    </div>
  );
};

export default ContactsLoading;

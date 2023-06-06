"use client";
import React from "react";
import clsx from "clsx";

import { Footer } from "'@/UI/footer/Footer'";
import { Header } from "'@/UI/header/Header'";
import styles from "./Layout.module.scss";
import { useTheme } from "'@/hooks/useTheme'";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon/favicon.ico" />
        <link rel="apple-touch-icon" href="icon/apple-touch.ico" />
      </head>
      <body className={clsx(theme === "light" && styles.light)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

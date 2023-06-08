"use client";
import React from "react";
import clsx from "clsx";

import Footer from "'@/UI/footer/Footer'";
import Header from "'@/UI/header/Header'";
import { useTheme } from "'@/hooks/useTheme'";
import Head from "next/head";
import styles from "./Layout.module.scss";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const pathname = usePathname();

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="icon/favicon.ico" />
        <link rel="apple-touch-icon" href="icon/apple-touch.ico" />
      </Head>
      <body
        className={clsx(
          styles.body,
          theme === "light" && styles.light,
          pathname === "/" && styles.main
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;

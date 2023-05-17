import React from "react";
import Link from "next/link";
import { Logo } from "../logo/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ul>
        <Link href={"/"}>Home</Link>
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/App"}>App</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
      </ul>
      <ul className={styles.icons}>
        <li>Search</li>
        <li>Message</li>
      </ul>
    </header>
  );
};

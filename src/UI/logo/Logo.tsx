import Link from "next/link";
import React from "react";
import { integral } from "../../assets/fonts/fonts";

export const Logo = () => {
  return (
    <Link className={integral.className} href={"/"}>
      GYM
    </Link>
  );
};

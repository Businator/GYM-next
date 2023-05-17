import Link from "next/link";
import React from "react";
import { integral } from "../../../assets/fonts/fonts";

export const Learn = () => {
  return (
    <Link className={integral.className} href={"/about"}>
      Learn more
    </Link>
  );
};

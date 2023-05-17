import Link from "next/link";
import React from "react";
import { integral } from "../../../../public/styles/fonts";

export const Learn = () => {
  return (
    <Link className={integral.className} href={"/about"}>
      Learn more
    </Link>
  );
};

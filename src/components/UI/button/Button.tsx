import React from "react";
import { integral } from "../../../../public/styles/fonts";

type ButtonType = {
  children: string;
};

export const Button = ({ children }: ButtonType) => {
  return (
    <button
      className={`text-black bg-acid-green rounded-3xl px-4 py-2  hover:shadow-3xl ${integral.className}`}
    >
      {children}
    </button>
  );
};

"use client";

import { integral, russoOne } from "'@/assets/fonts/fonts'";
import { useEffect, useState } from "react";

export const useFontForLanguage = () => {
  const [font, setFont] = useState(integral.className);

  useEffect(() => {
    if (localStorage.getItem("lang") === "ru") {
      setFont(russoOne.className);
    }
  }, [typeof localStorage !== "undefined" && localStorage.getItem("lang")]);

  return font;
};

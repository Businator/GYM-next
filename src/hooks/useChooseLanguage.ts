import { integral, russoOne } from "'@/assets/fonts/fonts'";
import { useEffect, useState } from "react";

export const useChooseLanguage = () => {
  const [language, setLanguage] = useState(integral.className);

  useEffect(() => {
    if (localStorage.getItem("lang") === "ru") {
      setLanguage(russoOne.className);
    }
  });

  return language;
};

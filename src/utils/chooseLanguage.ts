import { integral, russoOne } from "'@/assets/fonts/fonts'";

export const chooseLanguage = () => {
  if (localStorage.getItem("lang") === "ru") {
    return russoOne.className;
  }

  return integral.className;
};

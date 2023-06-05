import { integral, russoOne } from "'@/assets/fonts/fonts'";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

export const chooseLanguage = () => {
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;

  if (searchParams.get("lang") === "ru") {
    return russoOne.className;
  }

  return integral.className;
};

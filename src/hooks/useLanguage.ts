import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type useLangaugeType = {
  resourse: string;
  translationName: string;
};

export const useLanguage = ({ resourse, translationName }: useLangaugeType) => {
  const { t, i18n } = useTranslation(resourse);
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      i18n.changeLanguage(localStorage.getItem("lang") as string);
    }
  }, [i18n]);

  useEffect(() => {
    i18n.changeLanguage(searchParams.get("lang") as string | undefined);
  }, [searchParams, i18n]);

  return t(translationName, { returnObjects: true });
};

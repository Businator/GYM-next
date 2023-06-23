"use client";

import React, { ChangeEvent } from "react";
import { Switch } from "@mui/material";

import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { stylesForSwitch } from "./assets/styles/stylesForLanguageSwitch";

export const LanguageSwitch = () => {
  const router = useRouter();
  const pathname = usePathname() as string;
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;

  const changeLanguage = (lang: string) => {
    const current = new URLSearchParams(searchParams.toString());
    current.delete("lang");
    const path = pathname + `?lang=${lang}` + "&" + current.toString();

    return path;
  };

  const handlerSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.checked) {
      case false:
        router.replace(changeLanguage("en"));
        localStorage.setItem("lang", "en");
        break;
      case true:
        router.replace(changeLanguage("ru"));
        localStorage.setItem("lang", "ru");
        break;
    }
  };
  return (
    <Switch
      onChange={handlerSwitch}
      checked={localStorage.getItem("lang") === "ru"}
      sx={stylesForSwitch}
    />
  );
};

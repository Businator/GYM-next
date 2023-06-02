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

  const handlerSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.checked) {
      case false:
        router.replace(pathname + "?lang=en");
        break;
      case true:
        router.replace(pathname + "?lang=ru");
        break;
    }
  };
  return (
    <Switch
      onChange={handlerSwitch}
      checked={searchParams.get("lang") === "ru"}
      sx={stylesForSwitch}
    />
  );
};

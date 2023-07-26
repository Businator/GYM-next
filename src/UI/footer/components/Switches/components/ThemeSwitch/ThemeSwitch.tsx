import React, { ChangeEvent } from "react";
import { Switch } from "@mui/material";
import {
  useRouter,
  usePathname,
  useSearchParams,
  ReadonlyURLSearchParams,
} from "next/navigation";
import { stylesForSwitch } from "./assets/styles/stylesForThemeSwitch";

export const ThemeSwitch = () => {
  const router = useRouter();
  const pathname = usePathname() as string;
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;

  const changeTheme = (theme: string) => {
    const current = new URLSearchParams(searchParams.toString());

    if (!searchParams.has("theme") && searchParams.has("lang")) {
      return pathname + "?" + current.toString() + "&" + `theme=${theme}`;
    }

    if (searchParams.has("theme") && searchParams.has("lang")) {
      current.delete("theme");
      return pathname + "?" + current.toString() + "&" + `theme=${theme}`;
    }

    if (searchParams.has("theme") && !searchParams.has("lang")) {
      current.delete("theme");
      return pathname + `?theme=${theme}`;
    }

    return pathname + `?theme=${theme}`;
  };

  const handlerSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.checked) {
      case false:
        router.replace(changeTheme("light"));
        changeTheme("light");
        localStorage.setItem("theme", "light");
        break;
      case true:
        router.replace(changeTheme("dark"));
        changeTheme("dark");
        localStorage.setItem("theme", "dark");
        break;
    }
  };

  return (
    <Switch
      sx={stylesForSwitch}
      onChange={handlerSwitch}
      checked={localStorage.getItem("theme") === "dark"}
    />
  );
};

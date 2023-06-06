import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark") as [
    string,
    Dispatch<SetStateAction<string | undefined>>
  ];
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;

  useEffect(() => {
    searchParams.get("theme") === null
      ? localStorage.setItem("theme", theme)
      : localStorage.setItem("theme", searchParams.get("theme") as string);

    console.log(searchParams.get("theme"));
  }, []);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") as string);
  }, [searchParams]);

  return theme;
};

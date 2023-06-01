import React from "react";
import { LanguageSwitch } from "./components/LanguageSwitch/LanguageSwitch";
import { ThemeSwitch } from "./components/ThemeSwitch/ThemeSwitch";
import { MenuItem } from "@mui/material";

export const Switches = () => {
  return (
    <>
      <MenuItem>
        <LanguageSwitch />
      </MenuItem>
      <MenuItem>
        <ThemeSwitch />
      </MenuItem>
    </>
  );
};

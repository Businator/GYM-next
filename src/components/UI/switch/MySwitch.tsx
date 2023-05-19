import { Switch } from "@mui/material";
import React from "react";

export const MySwitch = () => {
  return (
    <Switch
      sx={{
        width: 100,
        height: 55,
        "& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked": {
          transform: "translateX(45px)",
        },
        "& .MuiButtonBase-root": {
          color: "black",
          top: "6px",
          left: "6px",
        },
        "& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track":
          {
            backgroundColor: "orange",
            opacity: "1",
          },
        "& .MuiSwitch-track": {
          backgroundColor: "orange",
          borderRadius: "15px",
          opacity: "1",
        },
        "& .Mui-checked+.MuiSwitch-track": {
          backgroundColor: "orange",
        },
        "& .MuiSwitch-thumb": {
          backgroundColor: "black",
          width: "25px",
          height: "25px",
        },
      }}
    />
  );
};

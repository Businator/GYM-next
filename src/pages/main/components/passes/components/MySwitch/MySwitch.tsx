import React from "react";
import { Switch } from "@mui/material";
import styles from "./MySwitch.module.scss";
import clsx from "clsx";

const switchStyles = {
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
};

export const MySwitch = ({ switchState }: React.ComponentState) => {
  const [isYearly, setIsYearly] = switchState;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsYearly(event.target.checked);
  };

  return (
    <div className={styles.container}>
      <span>
        <span className={clsx([!isYearly && styles.active])}>Monthly</span>
        &nbsp;/&nbsp;
        <span className={clsx([isYearly && styles.active])}>Yearly</span>
      </span>
      <Switch sx={switchStyles} onChange={(event) => handleChange(event)} />
    </div>
  );
};

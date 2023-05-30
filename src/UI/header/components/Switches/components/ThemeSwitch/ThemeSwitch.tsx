import React from "react";
import { Switch, SxProps } from "@mui/material";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

const stylesForSwitch = {
  width: 80,
  padding: "5px",
  "& .MuiSwitch-root": {},
  "& .MuiSwitch-track": {
    height: 15,
    width: 70,
    borderRadius: 15,
    backgroundColor: "orange",
    opacity: 1,
  },
  "& .MuiButtonBase-root": {
    top: "-9px",
    left: 0,
  },
  "& .MuiSwitch-thumb": {
    width: 25,
    height: 25,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#D6FD51",
    border: "1px solid black",
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="${
        BsSunFill({}).props.attr.viewBox
      }"><path fill="${encodeURIComponent("black")}" d="${
        BsSunFill({}).props.children[0].props.d
      }"/></svg>')`,
    },
  },
  "& .Mui-checked": {
    transform: "translateX(38px)",
    "&+ .MuiSwitch-track": {
      backgroundColor: "gray",
      opacity: 1,
    },
    "& .MuiSwitch-thumb:before": {
      width: 25,
      height: 25,
      top: 9,
      left: 9,
      borderRadius: 9999,
      backgroundColor: "black",
      border: "1px solid #D6FD51",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="${
        BsFillMoonStarsFill({}).props.attr.viewBox
      }"><path fill="${encodeURIComponent("#D6FD51")}" d="${
        BsFillMoonStarsFill({}).props.children[0].props.d
      }"/></svg>')`,
    },
  },
} as SxProps;

export const ThemeSwitch = () => {
  return <Switch sx={stylesForSwitch} />;
};

import { SxProps } from "@mui/material";
import russia from "../image/russia.svg";
import uk from "../image/uk.svg";

export const stylesForSwitch = {
  width: 80,
  padding: "5px",
  "& .MuiSwitch-track": {
    width: 70,
    borderRadius: 15,
    backgroundColor: "orange",
    opacity: 1,
  },
  "& .MuiButtonBase-root": {
    top: "-3px",
    left: 0,
  },
  "& .MuiSwitch-thumb": {
    width: 25,
    height: 25,
    "&:before": {
      content: "''",
      position: "absolute",
      width: 25,
      height: 25,
      left: 9,
      top: 9,
      backgroundImage: `url(${uk.src})`,
      backgroundSize: "contain",
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
      backgroundImage: `url(${russia.src})`,
      backgroundSize: "contain",
    },
  },
} as SxProps;
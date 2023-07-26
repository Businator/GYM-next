import { SxProps } from "@mui/material";
import russia from "../image/russia.svg";
import uk from "../image/uk.svg";

export const stylesForSwitch = {
  padding: "5px",
  "& .MuiSwitch-track": {
    borderRadius: 15,
    backgroundColor: "orange",
    opacity: 1,
  },
  "& .MuiButtonBase-root": {
    top: "-3px",
    left: "-3px",
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
    "& .MuiSwitch-thumb:before": {
      backgroundImage: `url(${russia.src})`,
    },
  },
} as SxProps;

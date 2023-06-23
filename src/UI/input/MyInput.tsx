import { Input, InputProps, SxProps } from "@mui/material";
import React from "react";

const inputStyle = {
  width: "100%",
  color: "white",
  padding: "5px 5px 5px 8px",
  backgroundColor: "rgb(107 114 128)",
  ":after": {
    borderBottom: "2px solid #D6FD51",
  },
  borderRadius: "5px",
} as SxProps;

export const MyInput = ({ ...rest }: InputProps) => {
  return <Input sx={inputStyle} {...rest} />;
};

import { FormControl, InputProps, SxProps } from "@mui/material";
import React from "react";
import { MyInput } from "../input/MyInput";
import { MyFormHelperText } from "../formHelperText/MyFormHelperText";

const formControlStyles = {
  height: 80,
  width: "100%",
} as SxProps;

export const MyFormControl = ({
  inputProps,
  text,
  isValid,
}: {
  inputProps: InputProps;
  text: string | null;
  isValid: null | boolean;
}) => {
  return (
    <FormControl
      sx={formControlStyles}
      error={
        (isValid === null && false) ||
        (typeof isValid === "boolean" && !isValid)
      }
    >
      <MyInput {...inputProps} />
      <MyFormHelperText text={text} />
    </FormControl>
  );
};

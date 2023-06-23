import { FormHelperText, SxProps, useFormControl } from "@mui/material";
import React from "react";

const formHelperTextStyles = {
  color: "red",
} as SxProps;

export const MyFormHelperText = ({ text }: { text: string | null }) => {
  const { error } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (error) {
      return text;
    }

    return "";
  }, [error, text]);

  return (
    <FormHelperText sx={formHelperTextStyles}>{helperText}</FormHelperText>
  );
};

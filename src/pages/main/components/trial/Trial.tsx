"use client";

import React, { FormEvent, useState } from "react";
import { SxProps, TextField } from "@mui/material";

import { integral } from "'@/assets/fonts/fonts'";
import { Button } from "'@/UI/button/Button'";
import { validateEmail } from "'@/utils/validateEmail'";
import clsx from "clsx";
import style from "./Trial.module.scss";

const textFieldStyles = {
  "& .MuiInputBase-input": {
    width: 400,
    height: 35,
    backgroundColor: "rgb(28 25 23)",
    color: "white",
    borderRadius: "1.5rem",
    padding: "0 0 0 15px",
  },
  "& .MuiOutlinedInput-root": {
    height: "100%",
    borderRadius: "1.5rem",
  },
  "& .MuiFormHelperText-root": {
    fontSize: "1rem",
    fontWeight: "600",
  },
  "& .Mui-error": {
    color: "#ff0000",
  },
} as SxProps;

export const Trial = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError(true);
    } else {
      console.log(email);
      setError(false);
      setEmail("");
    }
  };

  return (
    <div className={style.container}>
      <section className={style.trial}>
        <h2 className={integral.className}>GET YOUR FIRST TRIAL VISIT</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          voluptates, ipsam dolorum ipsa, placeat perferendis nemo
        </p>
        <form onSubmit={(event) => handleSubmit(event)}>
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={error}
            placeholder="youemail@email.com"
            helperText={error && "Please enter a valid email address"}
            sx={textFieldStyles}
          />
          <Button
            children="SUBMIT"
            type="submit"
            className={clsx([error && style.buttonError])}
          />
        </form>
      </section>
    </div>
  );
};

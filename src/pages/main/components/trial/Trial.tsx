"use client";

import React, { FormEvent, useState } from "react";
import { SxProps, TextField } from "@mui/material";

import { Button } from "'@/UI/button/Button'";
import { validateEmail } from "'@/utils/validateEmail'";
import clsx from "clsx";
import { useLanguage } from "'@/hooks/useLanguage'";
import { chooseLanguage } from "'@/utils/chooseLanguage'";
import { useTheme } from "'@/hooks/useTheme'";
import { Section } from "../section/Section";
import styles from "./Trial.module.scss";

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

type trialContentType = {
  header: string;
  decription: string;
  button: string;
};

export const Trial = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const theme = useTheme();

  const trialContent = useLanguage({
    resourse: "main",
    translationName: "main.trial",
  }) as trialContentType;

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
    <Section className={styles.container}>
      <div className={clsx(styles.trial, theme === "light" && styles.light)}>
        <h2 className={chooseLanguage()}>
          {trialContent.header.toUpperCase()}
        </h2>
        <p>{trialContent.decription}</p>
        <form onSubmit={(event) => handleSubmit(event)}>
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={error}
            placeholder="youemail@email.com"
            helperText={error && "Please enter a valid email address"}
            sx={textFieldStyles}
          />
          <Button type="submit" className={clsx([error && styles.buttonError])}>
            {trialContent.button.toUpperCase()}
          </Button>
        </form>
      </div>
    </Section>
  );
};

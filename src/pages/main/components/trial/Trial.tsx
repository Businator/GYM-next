"use client";

import React, { FormEvent, useEffect, useState } from "react";

import { integral } from "'@/assets/fonts/fonts'";
import { Button } from "'@/components/UI/button/Button'";
import { validateEmail } from "'@/utils/validateEmail'";
import style from "./Trial.module.scss";

export const Trial = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      console.log(emailError);
    } else {
      console.log(email);
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
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="youemail@email.com"
          />
          <Button children="SUBMIT" type="submit" />
        </form>
      </section>
    </div>
  );
};

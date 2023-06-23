import React, { useEffect } from "react";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import clsx from "clsx";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  SxProps,
} from "@mui/material";

import { Card } from "../../UI/card/Card";
import { Headers } from "../../UI/headers/Headers";
import styles from "./GenderSlide.module.scss";

export const GenderSlide = ({
  genderState,
  setIsNextSlide,
}: {
  genderState: [string, React.Dispatch<React.SetStateAction<string>>];
  setIsNextSlide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [gender, setGender] = genderState;

  const chooseGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
    setIsNextSlide(false);
  };

  const formControlStyle = {
    margin: 0,
  } as SxProps;

  return (
    <Card>
      <Headers
        h2="Tell us about yourself!"
        h3="To give you a better experience we need to know your gender"
      />
      <div className={styles.genderContainer}>
        <RadioGroup>
          <FormControl sx={formControlStyle}>
            <Radio
              onChange={chooseGender}
              value="male"
              icon={
                <div className={clsx(styles.gender)}>
                  <BiMaleSign />
                  <span>Male</span>
                </div>
              }
              checkedIcon={
                <div className={clsx(styles.gender, styles.checked)}>
                  <BiMaleSign />
                  <span>Male</span>
                </div>
              }
            />
          </FormControl>
          <FormControl sx={formControlStyle}>
            <Radio
              onChange={chooseGender}
              value="female"
              icon={
                <div className={clsx(styles.gender)}>
                  <BiFemaleSign />
                  <span>Female</span>
                </div>
              }
              checkedIcon={
                <div className={clsx(styles.gender, styles.checked)}>
                  <BiFemaleSign />
                  <span>Female</span>
                </div>
              }
            />
          </FormControl>
        </RadioGroup>
      </div>
    </Card>
  );
};

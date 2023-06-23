import React, { useEffect, useState } from "react";

import { Card } from "../../UI/card/Card";
import { Headers } from "../../UI/headers/Headers";
import { validateWeight } from "../../../../utils/validators";
import { MyFormControl } from "'@/UI/formControl/MyFormControl'";

export const WeightSlide = ({
  weightState,
  setDisabledButtonNext,
}: {
  weightState: [string, React.Dispatch<React.SetStateAction<string>>];
  setDisabledButtonNext: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [weight, setWeight] = weightState;

  const [error, setError] = useState({
    value: null as null | string,
    isValid: null as null | boolean,
  });

  const [value, setValue] = useState("");

  const chooseWeight = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let string = event.target.value;
    string = string.replace(/[a-zа-яё]/gi, "");
    setValue(string);
    Number(string) < 1 && setValue("1");
    const { text, isValid } = validateWeight(string);
    setError({ value: text, isValid: isValid });
    setDisabledButtonNext(!isValid);
    isValid && setWeight(string);
  };

  return (
    <Card>
      <Headers h2="What's your weight?" h3="You can always change this later" />
      <MyFormControl
        inputProps={{
          type: "text",
          onChange: chooseWeight,
          placeholder: "Set your weight",
          endAdornment: "kg",
          value: value,
        }}
        isValid={error.isValid}
        text={error.value}
      />
    </Card>
  );
};

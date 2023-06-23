import React, { useEffect, useState } from "react";

import { Card } from "../../UI/card/Card";
import { Headers } from "../../UI/headers/Headers";
import { validateWeight } from "../../../../utils/validators";
import { MyFormControl } from "'@/UI/formControl/MyFormControl'";

export const WeightSlide = ({
  weightState,
  setIsNextSlide,
}: {
  weightState: [string, React.Dispatch<React.SetStateAction<string>>];
  setIsNextSlide: React.Dispatch<React.SetStateAction<boolean>>;
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
    setValue(event.target.value);
    Number(event.target.value) < 1 && setValue("1");
    const { text, isValid } = validateWeight(event.target.value);
    setError({ value: text, isValid: isValid });
    setIsNextSlide(!isValid);
    isValid && setWeight(event.target.value);
  };

  useEffect(() => {
    weight.length && setIsNextSlide(false);
  }, [weight.length]);

  return (
    <Card>
      <Headers h2="What's your weight?" h3="You can always change this later" />
      <MyFormControl
        inputProps={{
          type: "number",
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

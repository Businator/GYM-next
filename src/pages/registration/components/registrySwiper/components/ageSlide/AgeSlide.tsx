import React, { useEffect, useState } from "react";
import { Card } from "../../UI/card/Card";
import { Headers } from "../../UI/headers/Headers";
import { MyFormControl } from "'@/UI/formControl/MyFormControl'";
import { validateAge } from "../../../../utils/validators";

export const AgeSlide = ({
  ageState,
  setDisabledButtonNext,
}: {
  ageState: [string, React.Dispatch<React.SetStateAction<string>>];
  setDisabledButtonNext: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [age, setAge] = ageState;

  const [error, setError] = useState({
    value: null as null | string,
    isValid: null as null | boolean,
  });

  const [value, setValue] = useState("");

  const chooseAge = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let string = event.target.value;
    string = string.replace(/[a-zа-яё]/gi, "");
    setValue(string);
    Number(string) < 1 && setValue("1");
    const { text, isValid } = validateAge(string);
    setError({ value: text, isValid: isValid });
    setDisabledButtonNext(!isValid);
    isValid && setAge(string);
  };

  return (
    <Card>
      <Headers
        h2="How old are you?"
        h3="This helps us create your personalized plan"
      />
      <MyFormControl
        inputProps={{
          type: "text",
          onChange: chooseAge,
          placeholder: "Set your age",
          value: value,
          endAdornment: "yr",
        }}
        isValid={error.isValid}
        text={error.value}
      />
    </Card>
  );
};

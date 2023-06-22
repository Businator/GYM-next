import React, { useEffect, useState } from "react";
import { Card } from "../../UI/card/Card";
import { Headers } from "../../UI/headers/Headers";
import { MyFormControl } from "'@/UI/formControl/MyFormControl'";
import { validateAge } from "../../../../utils/validators";

export const AgeSlide = ({
  ageState,
  setIsNextSlide,
}: {
  ageState: [string, React.Dispatch<React.SetStateAction<string>>];
  setIsNextSlide: React.Dispatch<React.SetStateAction<boolean>>;
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
    setValue(event.target.value);
    Number(event.target.value) < 1 && setValue("1");
    const { text, isValid } = validateAge(event.target.value);
    setError({ value: text, isValid: isValid });
    setIsNextSlide(!isValid);
    isValid && setAge(event.target.value);
  };

  useEffect(() => {
    age.length && setIsNextSlide(false);
  }, [age.length]);

  return (
    <Card>
      <Headers
        h2="How old are you?"
        h3="This helps us create your personalized plan"
      />
      <MyFormControl
        inputProps={{
          type: "number",
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

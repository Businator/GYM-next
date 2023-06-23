import React, { useState } from "react";

import { Card } from "../../UI/card/Card";
import { Headers } from "../../UI/headers/Headers";
import { validateHeight } from "../../../../utils/validators";
import { MyFormControl } from "'@/UI/formControl/MyFormControl'";

export const HeightSlide = ({
  heightState,
  setIsSubmit,
}: {
  heightState: [string, React.Dispatch<React.SetStateAction<string>>];
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [height, setHeight] = heightState;

  const [error, setError] = useState({
    value: null as null | string,
    isValid: null as null | boolean,
  });

  const [value, setValue] = useState("");

  const chooseHeight = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
    Number(event.target.value) < 1 && setValue("1");
    const { text, isValid } = validateHeight(event.target.value);
    setError({ value: text, isValid: isValid });
    setIsSubmit(!isValid);
    isValid && setHeight(event.target.value);
  };

  return (
    <Card>
      <Headers
        h2="What's your height?"
        h3="This helps us create your personalized plan"
      />
      <MyFormControl
        inputProps={{
          type: "number",
          onChange: chooseHeight,
          placeholder: "Set your Height",
          endAdornment: "sm",
          value: value,
        }}
        isValid={error.isValid}
        text={error.value}
      />
    </Card>
  );
};

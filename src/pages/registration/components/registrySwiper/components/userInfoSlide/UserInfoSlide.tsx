import React, { useCallback, useEffect, useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { IconButton, InputAdornment } from "@mui/material";
import { Card } from "../../UI/card/Card";
import { Headers } from "../../UI/headers/Headers";
import { MyFormControl } from "'@/UI/formControl/MyFormControl'";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordRepeat,
} from "../../../../utils/validators";

export const UserInfoSlide = ({
  nameState,
  emailState,
  setDisabledButtonNext,
  passwordState,
}: {
  nameState: React.Dispatch<React.SetStateAction<string>>;
  emailState: React.Dispatch<React.SetStateAction<string>>;
  setDisabledButtonNext: React.Dispatch<React.SetStateAction<boolean>>;
  passwordState: [string, React.Dispatch<React.SetStateAction<string>>];
}) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisiblePasswordRepeat, setIsVisiblePasswordRepeat] = useState(false);

  const [password, setPassword] = passwordState;

  const [errors, setErrors] = useState({
    name: { value: null as null | string, isValid: null as null | boolean },
    email: { value: null as null | string, isValid: null as null | boolean },
    password: { value: null as null | string, isValid: null as null | boolean },
    passwordRepeat: {
      value: null as null | string,
      isValid: null as null | boolean,
    },
  });

  const nextSlide = useCallback(
    () =>
      Object.values(errors)
        .map((value) => value.isValid)
        .includes(null) ||
      Object.values(errors)
        .map((value) => value.isValid)
        .includes(false)
        ? setDisabledButtonNext(true)
        : setDisabledButtonNext(false),
    [errors]
  );

  useEffect(() => {
    nextSlide();
  }, [nextSlide]);

  const showPassword = (
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  ) => setIsVisible((prev) => !prev);

  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    objectName: string,
    validationFunction: typeof validatePasswordRepeat,
    dispatch?: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const { text, isValid } = validationFunction(
      event.target.value,
      objectName === "passwordRepeat" ? password : ""
    );
    setErrors((prev) => ({
      ...prev,
      [objectName]: { value: text, isValid: isValid },
    }));
    if (dispatch) isValid ? dispatch(event.target.value) : dispatch("");
  };

  return (
    <Card>
      <Headers
        h2="Tell us about yourself!"
        h3="You can always change this later"
      />
      <MyFormControl
        inputProps={{
          type: "text",
          placeholder: "Your name",
          onChange: (event) =>
            inputHandler(event, "name", validateName, nameState),
        }}
        text={errors.name.value}
        isValid={errors.name.isValid}
      />
      <MyFormControl
        inputProps={{
          type: "email",
          placeholder: "user@email.com",
          onBlur: (event) =>
            inputHandler(event, "email", validateEmail, emailState),
        }}
        text={errors.email.value}
        isValid={errors.email.isValid}
      />
      <MyFormControl
        inputProps={{
          type: isVisiblePassword ? "text" : "password",
          placeholder: "Set your password",
          onBlur: (event) =>
            inputHandler(event, "password", validatePassword, setPassword),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => showPassword(setIsVisiblePassword)}>
                {isVisiblePassword ? <MdVisibilityOff /> : <MdVisibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        text={errors.password.value}
        isValid={errors.password.isValid}
      />
      <MyFormControl
        inputProps={{
          type: isVisiblePasswordRepeat ? "text" : "password",
          placeholder: "Confirm your password",
          onChange: (event) =>
            inputHandler(event, "passwordRepeat", validatePasswordRepeat),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => showPassword(setIsVisiblePasswordRepeat)}
              >
                {isVisiblePasswordRepeat ? (
                  <MdVisibilityOff />
                ) : (
                  <MdVisibility />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        text={errors.passwordRepeat.value}
        isValid={errors.passwordRepeat.isValid}
      />
    </Card>
  );
};

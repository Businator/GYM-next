import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import { GenderSlide } from "./components/genderSlide/GenderSlide";
import { AgeSlide } from "./components/ageSlide/AgeSlide";

import { RegistrySwiperButton } from "./components/registrySwiperButton/RegistrySwiperButton";
import styles from "./RegistrySwiper.module.scss";
import { WeightSlide } from "./components/weightSlide/WeightSlide";
import { HeightSlide } from "./components/heightSlide/HeightSlide";
import { UserInfoSlide } from "./components/userInfoSlide/UserInfoSlide";
import { IUser } from "../../interfaces/IUser";
import { FormGroup } from "@mui/material";

export const RegistrySwiper = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [disabledButtonNext, setDisabledButtonNext] = useState(true);

  const userInfo = {
    name: name,
    email: email,
    password: password,
    gender: gender,
    age: age,
    weight: weight,
    height: height,
  } as IUser;

  const contentForSlides = [
    <UserInfoSlide
      key={1}
      nameState={setName}
      emailState={setEmail}
      setIsNextSlide={setDisabledButtonNext}
      passwordState={[password, setPassword]}
    />,
    <GenderSlide
      key={2}
      genderState={[gender, setGender]}
      setIsNextSlide={setDisabledButtonNext}
    />,
    <AgeSlide
      key={3}
      ageState={[age, setAge]}
      setIsNextSlide={setDisabledButtonNext}
    />,
    <WeightSlide
      key={4}
      weightState={[weight, setWeight]}
      setIsNextSlide={setDisabledButtonNext}
    />,
    <HeightSlide
      key={5}
      heightState={[height, setHeight]}
      setIsSubmit={setDisabledButtonNext}
    />,
  ];

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
  };

  return (
    <form className={styles.formGroup} onSubmit={submitHandler}>
      <Swiper
        allowTouchMove={false}
        slidesPerView={1}
        className={styles.swiper}
      >
        {contentForSlides.map((content, index) => {
          return (
            <SwiperSlide key={index} className={styles.slide}>
              {content}
            </SwiperSlide>
          );
        })}
        <RegistrySwiperButton
          user={userInfo}
          isNextSlideState={[disabledButtonNext, setDisabledButtonNext]}
        />
      </Swiper>
    </form>
  );
};

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
import { useRouter } from "next/navigation";

export const RegistrySwiper = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [disabledButtonNext, setDisabledButtonNext] = useState(true);

  const router = useRouter();

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
      setDisabledButtonNext={setDisabledButtonNext}
      passwordState={[password, setPassword]}
    />,
    <GenderSlide
      key={2}
      genderState={[gender, setGender]}
      setDisabledButtonNext={setDisabledButtonNext}
    />,
    <AgeSlide
      key={3}
      ageState={[age, setAge]}
      setDisabledButtonNext={setDisabledButtonNext}
    />,
    <WeightSlide
      key={4}
      weightState={[weight, setWeight]}
      setDisabledButtonNext={setDisabledButtonNext}
    />,
    <HeightSlide
      key={5}
      heightState={[height, setHeight]}
      setIsSubmit={setDisabledButtonNext}
    />,
  ];

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(userInfo));
    router.replace("/app");
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
          isDisabledButtonState={[disabledButtonNext, setDisabledButtonNext]}
        />
      </Swiper>
    </form>
  );
};

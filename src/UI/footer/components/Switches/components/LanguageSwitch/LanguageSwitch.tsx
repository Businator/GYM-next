'use client';

import React, { ChangeEvent } from 'react';
import { Switch } from '@mui/material';
import { stylesForSwitch } from './assets/styles/stylesForLanguageSwitch';
import { useSelector, useDispatch } from 'react-redux';
import { switchEng, switchRus } from "'@/store/slices/langSlice'";
import { RootState } from "'@/store/store'";

export const LanguageSwitch = () => {
  const lang = useSelector((state: RootState) => state.lang.lang);
  const dispatch = useDispatch();

  const handlerSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.checked) {
      case false:
        dispatch(switchEng());
        break;
      case true:
        dispatch(switchRus());
        break;
    }
  };
  return (
    <Switch
      onChange={handlerSwitch}
      checked={lang === 'ru'}
      sx={stylesForSwitch}
    />
  );
};

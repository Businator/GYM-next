import React, { ChangeEvent } from 'react';
import { Switch } from '@mui/material';

import { stylesForSwitch } from './assets/styles/stylesForThemeSwitch';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "'@/store/store'";
import { switchDark, switchLight } from "'@/store/slices/themeSlice'";

export const ThemeSwitch = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const handlerSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.checked) {
      case false:
        dispatch(switchLight());
        break;
      case true:
        dispatch(switchDark());
        break;
    }
  };

  return (
    <Switch
      sx={stylesForSwitch}
      onChange={handlerSwitch}
      checked={theme === 'dark'}
    />
  );
};

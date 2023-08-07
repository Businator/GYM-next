import { createSlice } from '@reduxjs/toolkit';

enum THEME {
  DARK = 'dark',
  LIGHT = 'light',
}

interface IThemeState {
  theme: THEME;
}

const initialState: IThemeState = {
  theme: THEME.DARK,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchDark: (state) => {
      state.theme = THEME.DARK;
    },
    switchLight: (state) => {
      state.theme = THEME.LIGHT;
    },
  },
});

export const { switchDark, switchLight } = themeSlice.actions;

export default themeSlice.reducer;

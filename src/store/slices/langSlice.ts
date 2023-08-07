import { createSlice } from '@reduxjs/toolkit';

enum LANG {
  RU = 'ru',
  ENG = 'en',
}

interface ILangState {
  lang: LANG;
}

const initialState: ILangState = {
  lang: LANG.ENG,
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    switchRus: (state) => {
      state.lang = LANG.RU;
    },
    switchEng: (state) => {
      state.lang = LANG.ENG;
    },
  },
});

export const { switchEng, switchRus } = langSlice.actions;

export default langSlice.reducer;

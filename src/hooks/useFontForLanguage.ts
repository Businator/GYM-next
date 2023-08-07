'use client';

import { useSelector } from 'react-redux';
import { integral, russoOne } from "'@/assets/fonts/fonts'";
import { useEffect, useState } from 'react';
import { RootState } from "'@/store/store'";

export const useFontForLanguage = () => {
  const [font, setFont] = useState(integral.className);
  const lang = useSelector((state: RootState) => state.lang.lang);

  useEffect(() => {
    if (lang === 'ru') {
      setFont(russoOne.className);
    }
  }, [lang]);

  return font;
};

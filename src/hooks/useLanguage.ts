'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/i18n';
import { RootState } from './../store/store';
import { useSelector } from 'react-redux';

type useLangaugeType = {
  resourse: string;
  translationName: string;
};

export const useLanguage = ({ resourse, translationName }: useLangaugeType) => {
  const { t, i18n } = useTranslation(resourse);
  const lang = useSelector((state: RootState) => state.lang.lang);
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  return t(translationName, { returnObjects: true });
};

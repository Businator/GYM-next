'use client';
import { RootState } from './../store/store';
import { useSelector } from 'react-redux';

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return theme;
};

'use client';

import React, { FormEvent, useState } from 'react';
import { SxProps, TextField } from '@mui/material';

import { Button } from "'@/UI/button/Button'";
import { validateEmail } from "'@/utils/validateEmail'";
import clsx from 'clsx';
import { useLanguage } from "'@/hooks/useLanguage'";
import { useFontForLanguage } from "'@/hooks/useFontForLanguage'";
import { useTheme } from "'@/hooks/useTheme'";
import Section from '../section/Section';
import Link from 'next/link';
import { integral } from "'@/assets/fonts/fonts'";
import styles from './Trial.module.scss';

const textFieldStyles = {
  '& .MuiInputBase-input': {
    width: 400,
    height: 35,
    backgroundColor: 'rgb(28 25 23)',
    color: 'white',
    borderRadius: '1.5rem',
    padding: '0 0 0 15px',
  },
  '& .MuiOutlinedInput-root': {
    height: '100%',
    borderRadius: '1.5rem',
  },
  '& .MuiFormHelperText-root': {
    fontSize: '1rem',
    fontWeight: '600',
  },
  '& .Mui-error': {
    color: '#ff0000',
  },
} as SxProps;

type trialContentType = {
  header: string;
  decription: string;
  link: string;
};

const Trial = () => {
  const theme = useTheme();
  const font = useFontForLanguage();

  const trialContent = useLanguage({
    resourse: 'main',
    translationName: 'main.trial',
  }) as trialContentType;

  return (
    <Section className={styles.container}>
      <div className={clsx(styles.trial, theme === 'light' && styles.light)}>
        <h2 className={font}>{trialContent.header.toUpperCase()}</h2>
        <p>{trialContent.decription}</p>
        <Link
          href={'/registration'}
          className={clsx(integral.className, styles.link, font)}
        >
          {trialContent.link.toUpperCase()}
        </Link>
      </div>
    </Section>
  );
};

export default Trial;

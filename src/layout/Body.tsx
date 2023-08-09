'use client';

import React from 'react';
import styles from './Body.module.scss';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from "'@/store/store'";

const Body = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <body
      className={clsx(
        styles.body,
        theme === 'light' && styles.light,
        pathname === '/' && styles.main
      )}
    >
      {children}
    </body>
  );
};

export default Body;

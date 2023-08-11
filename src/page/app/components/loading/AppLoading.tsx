import React from 'react';
import { BiDumbbell } from 'react-icons/bi';
import styles from './AppLoading.module.scss';

const AppLoading = () => {
  return (
    <div className={styles.container}>
      <div>
        <BiDumbbell />
      </div>
      <h1>GYM</h1>
    </div>
  );
};

export default AppLoading;

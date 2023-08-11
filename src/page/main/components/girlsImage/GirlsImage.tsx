'use client';

import Image from 'next/image';
import React from 'react';

import girlsImage from './assets/image/girls.jpg';

import Section from '../section/Section';
import styles from './GirlsImage.module.scss';

const GirlsImage = () => {
  return (
    <Section className={styles.container}>
      <Image
        src={girlsImage}
        alt='girls pump their abs'
        className={styles.girlsImg}
      />
    </Section>
  );
};

export default GirlsImage;

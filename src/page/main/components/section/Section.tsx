import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Section.module.scss';
import clsx from 'clsx';

const Section = ({
  children,
  className,
  ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: [0.5],
  });

  return (
    <section
      ref={ref}
      className={clsx(styles.section, inView && styles.view, className)}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;

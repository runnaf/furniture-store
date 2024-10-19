import React from 'react';
import styles from './HeaderSection.module.scss';

export const HeaderSection = ({
  subTitle,
  children,
}) => {

  return (
    <div className={styles.headerSection}>
          <div className={styles.wrapper}>
            <div className={styles.line}></div>
            <p className={styles.subTitle}>{subTitle}</p>
          </div>
        <h2 className={styles.title}>{children}</h2>
    </div>
  );
};

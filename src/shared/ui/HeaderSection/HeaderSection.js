import React from 'react';
import styles from './HeaderSection.module.scss';

const HeaderSection = ({
  subTitle,
  title,
  children,
}) => {

  return (
    <div className={styles.headerSection}>
          <div className={styles.wrapper}>
            <div className={styles.line}></div>
            <p className={styles.subTitle}>{subTitle}</p>
          </div>
        <h2 className={styles.title}>{title}<span>{children}</span></h2>
    </div>
  );
};

export default HeaderSection;

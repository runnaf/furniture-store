import React from 'react';
import styles from './HeaderSection.module.scss';

const HeaderSection = ({
  subTitle, //передавать как children, потому что subTitle имеет только акцентные слова зеленым, а не весь текст
  title,
}) => {

  return (
    <div className={styles.headerSection}>
          <div className={styles.wrapper}>
            <div className={styles.line}></div>
            <p className={styles.subTitle}>{subTitle}</p>
          </div>
        <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default HeaderSection;

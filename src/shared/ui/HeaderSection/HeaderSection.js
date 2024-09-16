import React from 'react';
import styles from './HeaderSection.module.scss';
import { getStyles } from '../../libs/getStyles';

const HeaderSection = ({
  subTitle,
  title,
  className,
  ...otherProps
}) => {
  const mode = {};
  const additional = [className];

  const headerSectionClasses = getStyles(styles.headerSection, mode, additional);

  return (
    <div className={headerSectionClasses} {...otherProps}>
      <div className={styles.left}>
        {subTitle && (
          <div className={styles.wrapper}>
            <div className={styles.line}></div>
            <p className={styles.subTitle}>{subTitle}</p>
          </div>
        )}
        {title && <h2 className={styles.title}>{title}</h2>}
      </div>
    </div>
  );
};

export default HeaderSection;

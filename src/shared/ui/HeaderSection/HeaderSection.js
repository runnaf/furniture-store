import React from 'react';
import styles from './HeaderSection.module.scss';
import { getStyles } from '../../libs/getStyles';

const HeaderSection = ({
  subTitle,
  title,
  variant = 'default',
  buttons = [],
  content = null
}) => {

  const sectionClass = getStyles(
    styles.headerSection, 
    { [`headerSection--${variant}`]: variant }, 
    []
  );

  return (
    <div className={sectionClass}>
      <div className={styles.headerSection__left}>
        {subTitle && (
          <div className={styles.headerSection__subTitleWrapper}>
            <div className={styles.headerSection__subTitleLine}></div>
            <span className={styles.headerSection__subTitle}>{subTitle}</span>
          </div>
        )}
        {title && <h1 className={styles.headerSection__title}>{title}</h1>}
      </div>
      {content && content.trim() && (
        <div className={styles.headerSection__right}>
           <p className={styles.headerSection__rightContent}>{content}</p>
        </div>
      )}
      {buttons.length > 0 && (
        <div className={styles.headerSection__buttons}>
          {buttons.map((button, index) => (
            <button
              key={index}
              className={getStyles(
                styles.headerSection__button, 
                { [`headerSection__button--${button.variant}`]: button.variant }, 
                []
              )}
              onClick={button.onClick}
            >
              {button.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderSection;
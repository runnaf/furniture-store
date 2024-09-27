import React from 'react';
import styles from './HeaderSection.module.scss';

const HeaderSection = ({
  subTitle,
  title,
  accentWords = [], // Массив акцентных слов
}) => {

  const renderTitle = () => {
    // Разбиваем заголовок на слова
    const words = title.split(' ');
    
    return words.map((word, index) => {
      // Проверяем, является ли слово акцентным
      const isAccent = accentWords.includes(word);
      return (
        <span
          key={index}
          className={isAccent ? styles.accentWord : styles.normalWord}
        >
          {word}{' '}
        </span>
      );
    });
  };

  return (
    <div className={styles.headerSection}>
          <div className={styles.wrapper}>
            <div className={styles.line}></div>
            <p className={styles.subTitle}>{subTitle}</p>
          </div>
        <h2 className={styles.title}>{renderTitle()}</h2>
    </div>
  );
};

export default HeaderSection;

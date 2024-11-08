import React, { useState } from 'react';
import { Stack } from '../Stack/Stack';
import styles from './CustomSelect.module.scss';
import { getStyles } from '../../libs/getStyles';
import { useResize } from '../../hooks/useResize';

const mobileWidth = 590

export const CustomSelect = ({ options, label, onChange, getValueOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]); //TODO selectedOption - значение которое будет передаваться на бэк

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onChange) {
        onChange((option));
        }
    };

    const mode = {
        [styles.up] : isOpen
    }

    const stylesArrow = getStyles(styles.arrow, mode, [])

    const width = useResize();
    const notMobile = width > mobileWidth;

    return (
        <Stack className={styles.customSelect} gap="8" align="alignCenter">
            {notMobile && <label>{label}</label>}
            <Stack className={styles.wrapper}>
                <Stack className={styles.selectBox} justify="justifyBetween" align="alignCenter" onClick={toggleSelect} gap="8">
                    <div className={styles.selectedOption}>{getValueOption(selectedOption)}</div>
                    <div className={stylesArrow} />
                </Stack>
                {isOpen && (
                    <div className={styles.options}>
                    {options.map(option => (
                        <div 
                        key={option}
                        value={option}
                        className={styles.option} 
                        onClick={() => handleOptionClick(option)}
                        >
                            {getValueOption(option)}
                        </div>
                    ))}
                    </div>
                )}
            </Stack>
            
        </Stack>
    );
};
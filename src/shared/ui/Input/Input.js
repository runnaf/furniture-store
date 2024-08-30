import React, { useEffect } from 'react';
import { getStyles } from '../../libs/getStyles';
import styles from './Input.module.scss';

const Input = ({
    type = 'text',
    placeholder,
    value,
    onChange,
    className = '',
    size = 'md',
    register,
    name,
    options,
    setValue,
    valueInput,
    error,
    variant = 'form',
    ...otherProps
}) => {
    const isMobile = window.innerWidth <= 768;

    // Формирование классов
    const inputClasses = getStyles(
        styles.input,
        {
            [styles[`size-${size}`]]: true,
            [styles[`mobile-size-${size}`]]: isMobile,
            [styles[variant]]: true,
        },
        [className]
    );

   // Форматирует значение инпута в режиме 'calculate', добавляя разделители тысяч.
    useEffect(() => {
        if (variant === 'calculate') {
            const formattedValue = valueInput.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            setValue(name, formattedValue);
        }
    }, [valueInput, name, setValue, variant]);

    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={inputClasses}
                {...(register ? register(name, options) : {})} // Регистрация поля с помощью react-hook-form
                {...otherProps}
            />
            {error && <div className={styles.error}>{error.message}</div>}
        </>
    );
};

export default Input;

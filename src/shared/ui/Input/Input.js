import { useState } from 'react';
import { getStyles } from '../../libs/getStyles';
import styles from './Input.module.scss';

export const Input = ({
    value,
    onChange,
    className,
    label,
    error = false,
    errorMessage = '',
    id,
    ...otherProps
}) => {

    const [defaultValue, setDefaultValue] = useState(value)

    const handleChange = (e) => {
        onChange(e.target.value);
        setDefaultValue(e.target.value)
    }

    const mode = {
        [styles.error]: error,
    };

    const additional = [
        className,
    ];

    const inputClasses = getStyles(styles.input, mode, additional);

    return (
        <div className={styles.inputWrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                id={id}
                value={defaultValue}
                onChange={handleChange}
                className={inputClasses}
                {...otherProps}
            />
            {error && errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
        </div>
    );
};

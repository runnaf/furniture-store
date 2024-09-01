import { getStyles } from '../../libs/getStyles';
import styles from './Input.module.scss';

export const Input = ({
    value,
    onChange,
    placeholder = '',
    className,
    variant = 'default',
    label,
    error = false,
    errorMessage = '',
    id,
    ...otherProps
}) => {

    const mode = {
        [styles.error]: error,
    };

    const additional = [
        className,
        styles[variant],
    ];

    const inputClasses = getStyles(styles.input, mode, additional);

    return (
        <div className={styles.inputWrapper}>
            {label && <label className={styles.label} htmlFor={id}>{label}</label>}
            <input
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={inputClasses}
                {...otherProps}
            />
            {error && errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
        </div>
    );
};

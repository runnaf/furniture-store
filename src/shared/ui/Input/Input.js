import { getStyles } from "../../libs/getStyles";
import styles from './Input.module.scss';

export const Input = ({
    value,
    onChange,
    placeholder = '',
    className,
    disabled = false,
    size = 'm',
    fullWidth = false,
    variant = 'default', // Added variant prop
    ...otherProps
}) => {

    const mode = {
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
    };

    const additional = [
        className,
        styles[size],
        styles[variant], // Apply variant styles
    ];

    const inputClasses = getStyles(styles.input, mode, additional);

    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={inputClasses}
            disabled={disabled}
            {...otherProps}
        />
    );
};

import { getStyles } from '../../libs/getStyles';
import styles from './Input.module.scss';

export const Input = ({
    register,
	name,
	options,
	setValue,
	error,
    className,
    label,
    id,
    ...otherProps
}) => {

    const mode = {
        [styles.error]: !!error,
    };

    const additional = [
        className,
    ];

    const inputClasses = getStyles(styles.input, mode, additional);

    return (
        <div className={styles.inputWrapper}>
            {label && <label className={styles.label} htmlFor={id}>{label}</label>}
            <div>
                <input
                    id={id}
                    {...register(name, options)}
                    className={inputClasses}
                    {...otherProps}
                />
                <p className={styles.error_text}>{error ? error.message : ''}</p>
            </div>
        </div>
    );
};

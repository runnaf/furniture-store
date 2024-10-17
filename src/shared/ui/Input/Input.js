import { getStyles } from '../../libs/getStyles';
import styles from './Input.module.scss';

export const Input = ({
    register,
	name,
	options,
	setValue,
	valueInput,
	error,
    onChange,
    className,
    label,
    id,
    ...otherProps
}) => {

    const mode = {
        [styles]: true,
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
                {...register(name, options)}
                className={inputClasses}
                {...otherProps}
            />
            {error && <span className={styles.error}>{error.message}</span>}
        </div>
    );
};

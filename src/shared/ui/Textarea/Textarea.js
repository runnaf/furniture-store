import { getStyles } from '../../libs/getStyles';
import styles from './Textarea.module.scss';

export const Textarea = ({
    register,
	name,
	options,
	setValue,
	error,
    className,
    label,
    ...otherProps
}) => {

    const mode = {
        [styles.error]: !!error,
    };

    const additional = [
        className,
    ];

    const textareaClasses = getStyles(styles.textarea, mode, additional);

    return (
        <div className={styles.textareaWrapper}>
            {label && <label className={styles.label} htmlFor={name}>{label}</label>}
            <div>
                <textarea
                    id={name}
                    {...register(name, options)}
                    className={textareaClasses}
                    {...otherProps}
                />
                <p className={styles.error_text}>{error ? error.message : ''}</p>
            </div>
        </div>
    );
};
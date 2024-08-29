import { getStyles } from "../../libs/getStyles";
import styles from './Button.module.scss';

export const Button = ({
    className,
    children,
    size = 'md',
    radius = 'rounded',
    color = 'primary',
    outlined = true,
    ...otherProps
}) => {

   
    const additional = [
        className,
        styles[size],
        styles[radius],
        styles[color],
        outlined ? styles.outlined : null,
    ]

    return (
        <button 
        className={getStyles(styles.button, {}, additional)}
        {...otherProps}
        >
            {children}
        </button>
    );
};
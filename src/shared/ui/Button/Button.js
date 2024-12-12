import { getStyles } from "../../libs/getStyles";
import styles from './Button.module.scss';

export const Button = ({
    className,
    children,
    size = 'xs',
    radius = 'rounded', // rounded | circle
    color = 'primary', // primary | secondary | outlined | transparent
    outlined,
    ...otherProps
}) => {

    const mode = {
        [styles.outlined]: outlined,
    };

    const additional = [
        className,
        styles[size],
        styles[radius],
        styles[color],
    ];

    return (
        <button 
            className={getStyles(styles.button, mode, additional)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
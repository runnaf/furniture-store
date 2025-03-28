import { Link } from "react-router-dom";
import { getStyles } from "../../libs/getStyles";
import styles from './LinkCustom.module.scss';

export const LinkCustom = ({
    className,
    path,
    children,
    size = 'xs',
    radius = 'rounded', // rounded | circle
    color = 'primary', // primary | secondary | yellow | transparent
    disabled,
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
        styles[disabled]
    ];

    return (
        <Link to={path}
            className={getStyles(styles.button, mode, additional)}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
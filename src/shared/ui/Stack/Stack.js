import { getStyles } from "../../libs/getStyles";
import styles from './Stack.module.scss';

export const Stack = ({
    children, 
    className, 
    justify, 
    direction = 'row',
    align,
    max,
    gap,
    ...otherProps
}) => {

    const mapGap = {
        8: 'gap8',
        16: 'gap16',
        24: 'gap24',
        32: 'gap32',
    };

    const mode = {
        [styles.max]: max
    };

    const additional = [
        className,
        styles[justify],
        styles[align],
        styles[direction],
        gap && styles[mapGap[gap]]
    ]

    const stackClasses = getStyles(styles.stack, mode, additional);

    return (
        <div className={stackClasses} {...otherProps}>
            {children}
        </div>
    )
}
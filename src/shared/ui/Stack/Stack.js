import { forwardRef } from "react";
import { getStyles } from "../../libs/getStyles";
import styles from './Stack.module.scss';

export const Stack = forwardRef(({
    children, 
    className, 
    justify, //justifyBetween | justifyCenter | justifyAround | justifyEnd
    direction = 'row',
    align, //alignCenter | alignEnd
    max,
    gap,
    ...otherProps
}, ref) => {

    const mapGap = {
        4: 'gap4',
        8: 'gap8',
        12: 'gap12',
        16: 'gap16',
        24: 'gap24',
        32: 'gap32',
        40: 'gap40',
        48: 'gap48',
        75: 'gap75'
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

    const stackClasses = getStyles(styles.flex, mode, additional);

    return (
        <div className={stackClasses} ref={ref} {...otherProps}>
            {children}
        </div>
    )
})

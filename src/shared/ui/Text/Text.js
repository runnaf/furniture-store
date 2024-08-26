import { getStyles } from '../../libs/getStyles';
import styles from './Text.module.scss';

export const Text = ({ 
    type = 'p', 
    children, 
    size = 'xs',
    className 
}) => {

    const mapTextTag = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        p: 'p',
        li: 'li',
    }
    const TextTag = mapTextTag[type];

    const additional = [
        styles[size],
        className
    ]

    return (
        <TextTag className={getStyles(styles.text, {}, additional)}>
            {children}
        </TextTag>
    );
};
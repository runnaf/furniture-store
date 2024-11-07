import { getStyles } from '../../../../shared/libs/getStyles';
import styles from './TabItem.module.scss';

export const TabItem = ({ id, label, isActive, onClick }) => {
    const mode = {
        [styles.active] : isActive
    };

    const stylesName = getStyles(styles.tabItem, mode, []);

    return (
        <button
            className={stylesName}
            onClick={() => onClick(id)}
        >
            {label}
        </button>
    )
};

import styles from './TabItem.module.scss';

export const TabItem = ({ id, label, isActive, onClick }) => (
    <button
        className={`${styles.tabItem} ${isActive ? styles.active : ''}`}
        onClick={() => onClick(id)}
    >
        {label}
    </button>
);


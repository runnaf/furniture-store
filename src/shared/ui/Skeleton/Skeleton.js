import { memo } from 'react';
import styles from './Skeleton.module.scss';

export const Skeleton = memo(() => {
    return <div className={styles.skeleton} />
});

import { advantages } from '../../lib/data';
import { Advantage } from '../Advantage/Advantage';
import styles from './Advantages.module.scss';

export const Advantages = () => {
    return (
        <ul className={styles.container}>
            {advantages.map(advantage => 
                <Advantage 
                    key={advantage.title} 
                    advantage={advantage} 
                />
            )}
        </ul>
    );
};

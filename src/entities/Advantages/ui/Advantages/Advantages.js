import { Stack } from '../../../../shared/ui/Stack/Stack';
import { advantages } from '../../lib/data';
import { Advantage } from '../Advantage/Advantage';
import styles from './Advantages.module.scss';

export const Advantages = () => {
    return (
        <Stack className={styles.advantages}>
            <ul className={styles.container}>
                {advantages.map(advantage => 
                    <Advantage 
                        key={advantage.title} 
                        advantage={advantage} 
                    />
                )}
            </ul>
        </Stack>
    );
};

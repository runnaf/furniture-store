import { RotateCw  } from 'lucide-react';
import { Stack } from '../Stack/Stack';
import styles from './Loader.module.scss'

export const Loader = () => {
    return(
        <Stack className={styles.loaderWrapper}>
            <RotateCw  className={styles.loader}/>
        </Stack>
        
    )
}
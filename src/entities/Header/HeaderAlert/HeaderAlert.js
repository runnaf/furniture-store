import { useState } from 'react';
import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import { CrossIcon } from '../../../shared/assets/svg/crossIcon';
import styles from './HeaderAlert.module.scss';

export const HeaderAlert = () => {
    const [isVisible, setIsVisible] = useState(true);
    const isAuthenticated = false; //TODO

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        !isAuthenticated && isVisible && (
            <Stack
                className={styles.header_alert}
            >
                <Text className={styles.discount}>
                    Зарегистрируйтесь и ПОЛУЧИТЕ скидку 25% на первый заказ.
                </Text>
                <button className={styles.cross} onClick={handleClose}>
                    <CrossIcon />
                </button>
            </Stack>
        )
    );
};

import { useState } from 'react';
import styles from './HeaderAlert.module.scss';
import { Text } from '../../../../shared/ui/Text/Text';
import { crossIcon } from '../../../../shared/assets/svg/crossIcon';
import { Stack } from "../../../../shared/ui/Stack/Stack";

export const HeaderAlert = () => {
    const [isVisible, setIsVisible] = useState(true);
    const isAuthenticated = false; //TODO

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        !isAuthenticated && isVisible && (
            <Stack
                className={styles.header_content}
            >
                <Text className={styles.phone}>
                    Позвоните нам: +123-456-789
                </Text>
                <Text className={styles.discount}>
                    Зарегистрируйтесь и ПОЛУЧИТЕ скидку 25% на первый заказ.
                </Text>
                <button className={styles.cross} onClick={handleClose}>
                    {crossIcon()}
                </button>
            </Stack>
        )
    );
};

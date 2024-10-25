import { useState } from 'react';
import styles from './HeaderAlert.module.scss';
import { Text } from '../../../../shared/ui/Text/Text';
import { crossIcon } from '../../../../shared/assets/svg/crossIcon';
import { Stack } from "../../../../shared/ui/Stack/Stack";

export const HeaderAlert = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <Stack
                className={styles.header_content}
                justify='justifyBetween' max
            >
                <Text className={styles.phone}>
                    Позвоните нам: +123-456-789
                </Text>
                <Text>
                    Зарегистрируйтесь и ПОЛУЧИТЕ скидку 25% на первый заказ.
                </Text>
                <button className={styles.cross} onClick={handleClose}>
                    {crossIcon()}
                </button>
            </Stack>
        )
    );
};

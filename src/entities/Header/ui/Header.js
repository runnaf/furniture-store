import styles from './Header.module.scss';
import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import { crossIcon } from '../../../shared/assets/svg/crossIcon';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRouteSignin, getRouteSignup } from '../../../app/routes/lib/helper';

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <header className={styles.header}>
            <Stack justify="justifyAround" align="alignCenter" className={isVisible ? styles.visible : styles.hide}>
                <Text type="p" size="xs" className={styles.phone}>Позвоните нам: +123-456-789</Text>
                <Text type="p" size="xs" className={styles.discount}>Зарегистрируйтесь и ПОЛУЧИТЕ скидку 25% на первый заказ.</Text>
                <button className={styles.cross} onClick={handleClose}>
                    {crossIcon()}
                </button>
            </Stack>
            <Stack gap="16" className={styles.links}>
                <Link to={getRouteSignin()}>Вход</Link>
                <Link to={getRouteSignup()}>Регистрация</Link>
            </Stack>
        </header>
    );
};

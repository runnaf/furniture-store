import styles from './Header.module.scss';
import { Stack } from '../../../shared/ui/Stack/Stack';
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
            <Stack justify="justifyAround" align="alignCenter" className={`${styles.container} ${isVisible ? styles.visible : styles.hide}`}>
                    <p className={styles.phone}>Позвоните нам: +123-456-789</p>
                    <p className={styles.discount}>Зарегистрируйтесь и ПОЛУЧИТЕ скидку 25% на первый заказ. <Link to="/signup">Зарегистрируйтесь сейчас</Link></p>
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

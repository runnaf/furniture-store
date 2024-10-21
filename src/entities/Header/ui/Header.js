import styles from './Header.module.scss';
import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import { Link } from 'react-router-dom';
import { getRouteSignin, getRouteSignup } from '../../../app/routes/lib/helper';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Text className={styles.phone}>Позвоните нам: +123-456-789</Text>
            <Text>Зарегистрируйтесь и ПОЛУЧИТЕ скидку 25% на первый заказ.</Text>
            <Stack gap="16" className={styles.links}>
                <Link to={getRouteSignin()}>Вход</Link>
                <Link to={getRouteSignup()}>Регистрация</Link>
            </Stack>
        </header>
    );
};

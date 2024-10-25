import styles from './Header.module.scss';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Link } from 'react-router-dom';
import { getRouteSignin, getRouteSignup } from '../../../../app/routes/lib/helper';
import { signinIcon, signupIcon } from '../../../../shared/assets/svg/headerIcons';
import { HeaderAlert } from '../../HeaderAlert/ui/HeaderAlert';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Stack className={styles.header_container} justify='justifyBetween' align="alignCenter">
                <HeaderAlert />
                <Stack gap="16" className={styles.links}>
                    <Link to={getRouteSignin()}>
                        <span className={styles.text}>Вход</span>
                        <span className={styles.icon}>{signinIcon()}</span>
                    </Link>
                    <Link to={getRouteSignup()}>
                        <span className={styles.text}>Регистрация</span>
                        <span className={styles.icon}>{signupIcon()}</span>
                    </Link>
                </Stack>
            </Stack>
        </header>
    );
};

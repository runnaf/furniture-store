import styles from './Header.module.scss';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Link } from 'react-router-dom';
import { getRouteSignin, getRouteSignup } from '../../../../app/routes/lib/helper';
import { SigninIcon, SignupIcon } from '../../../../shared/assets/svg/headerIcons';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Stack justify="justifyEnd" className={styles.header_container} >
                <Stack gap="16" className={styles.links}>
                    <Link to={getRouteSignin()}>
                        <span className={styles.text}>Вход</span>
                        <span className={styles.icon}>{<SigninIcon />}</span>
                    </Link>
                    <Link to={getRouteSignup()}>
                        <span className={styles.text}>Регистрация</span>
                        <span className={styles.icon}>{<SignupIcon />}</span>
                    </Link>
                </Stack>
            </Stack>
        </header>
    );
};
import styles from './Header.module.scss';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { getRouteSignin, getRouteSignup } from '../../../../app/routes/lib/helper';
import { SigninIcon, SignupIcon } from '../../../../shared/assets/svg/headerIcons';
import { LinkCustom } from '../../../../shared/ui/LinkCustom/LinkCustom';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Stack justify="justifyEnd" className={styles.header_container} >
                <Stack gap="16" className={styles.links}>
                    <LinkCustom path={getRouteSignin()} color='secondary' className={styles.link}>
                        <span className={styles.text}>Вход</span>
                        <span className={styles.icon}>{<SigninIcon />}</span>
                    </LinkCustom>
                    <LinkCustom path={getRouteSignup()} color='secondary' className={styles.link}>
                        <span className={styles.text}>Регистрация</span>
                        <span className={styles.icon}>{<SignupIcon />}</span>
                    </LinkCustom>
                </Stack>
            </Stack>
        </header>
    );
};
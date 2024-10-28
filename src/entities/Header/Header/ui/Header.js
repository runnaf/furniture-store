import styles from './Header.module.scss';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../shared/ui/Text/Text';
import { getRouteSignin, getRouteSignup } from '../../../../app/routes/lib/helper';
import { LinkCustom } from '../../../../shared/ui/LinkCustom/LinkCustom';
import { SigninIcon, SignupIcon } from '../../../../shared/assets/svg/headerIcons';
import { useResize } from '../../../../shared/hooks/useResize';

export const Header = () => {
    const width = useResize();
    const isMobile = width < 590;

    const renderLinkContent = (text, Icon) => (
        isMobile ? <Icon /> : <Text>{text}</Text>
    );

    return (
        <header className={styles.header}>
            <Stack className={styles.header_container} >
                <Stack
                    className={styles.header_content}
                    justify='justifyBetween' max
                >
                    <Text className={styles.phone}>
                        Позвоните нам: +123-456-789
                    </Text>
                    <Text className={styles.discount}>
                        Зарегистрируйтесь и ПОЛУЧИТЕ скидку 25% на первый заказ.
                    </Text>
                    <Stack gap="16" className={styles.links}>
                        <LinkCustom path={getRouteSignin()} color='secondary' className={styles.link}>
                            {renderLinkContent("Вход", SigninIcon)}
                        </LinkCustom>
                        <LinkCustom path={getRouteSignup()} color='secondary' className={styles.link}>
                            {renderLinkContent("Регистрация", SignupIcon)}
                        </LinkCustom>
                    </Stack>
                </Stack>
            </Stack>
        </header>
    );
};
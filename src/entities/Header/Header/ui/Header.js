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





// import styles from './Header.module.scss';
// import { Stack } from '../../../../shared/ui/Stack/Stack';
// import { Text } from '../../../../shared/ui/Text/Text';
// import { Link } from 'react-router-dom';
// import { getRouteSignin, getRouteSignup } from '../../../../app/routes/lib/helper';
// import { signinIcon, signupIcon } from '../../../../shared/assets/svg/headerIcons';

// export const Header = () => {
//     return (
//         <header className={styles.header}>
//             <Stack className={styles.header_container} justify='justifyBetween' align="alignCenter">
//                     <Text className={styles.phone}>
//                         Позвоните нам: +123-456-789
//                     </Text>
//                     <Text>
//                         Зарегистрируйтесь и ПОЛУЧИТЕ скидку 25% на первый заказ.
//                     </Text>
//                 <Stack gap="16" className={styles.links}>
//                     <Link to={getRouteSignin()}>
//                         <span className={styles.text}>Вход</span>
//                         <span className={styles.icon}>{signinIcon()}</span>
//                     </Link>
//                     <Link to={getRouteSignup()}>
//                         <span className={styles.text}>Регистрация</span>
//                         <span className={styles.icon}>{signupIcon()}</span>
//                     </Link>
//                 </Stack>
//             </Stack>
//         </header>
//     );
// };

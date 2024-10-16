import styles from './SignupForm.module.scss';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../shared/ui/Text/Text';
import { Input } from '../../../../shared/ui/Input/Input';
import { Button } from '../../../../shared/ui/Button/Button';
import { HidePasswordIcon, ShowPasswordIcon } from '../../../../shared/assets/svg/passwordIcons';
import { LogoIcon, logoIcon } from '../../../../shared/assets/svg/navbarIcons';
import { CheckmarkIcon } from '../../../../shared/assets/svg/checkmarkIcon';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRouteMain, getRouteSignin } from '../../../../app/routes/lib/helper';

export const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const PasswordToggleIcon = showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form 
            className={styles.form} 
            onSubmit={handleSubmit}
        >
            <Link to={getRouteMain()}>
                <LogoIcon />
            </Link>

            <Stack direction="column" gap="32">
                <Text type="h2" size="xl" >Регистрация</Text>

                <Stack gap='16' className={styles.name}>
                    <Input
                        label="Имя"
                        type="text"
                        placeholder="Введите имя"
                        id="firstname"
                        className={styles.firstname}
                    />
                    <Input
                        label="Фамилия"
                        type="text"
                        placeholder="Введите фамилию"
                        id="lastname"
                    />
                </Stack>

                <Input
                    label="Электронная почта"
                    type="email"
                    placeholder="Введите адрес электронной почты"
                    id="email"
                    className={styles.email}
                />

                <Stack direction='column' className={styles.password}>
                    <Input
                        label="Пароль"
                        type={!showPassword ? 'password' : 'text'}
                        placeholder=" введите пароль"
                        id="password"
                    />
                    <button className={styles.password_btn}
                        onClick={() => setShowPassword(!showPassword)}>
                        {PasswordToggleIcon}
                    </button>
                </Stack>

                <Stack justify="justifyBetween" align="center">
                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            className={styles.hiddenCheckbox}
                        />
                        <span className={styles.customCheckbox}>
                            <CheckmarkIcon />
                        </span> Согласен с
                        
                        {/* TODO */}
                        <Link href='/' className={styles.linkAgree}> Условиями </Link> и 
                        <Link href='/' className={styles.linkAgree}> Политикой Конфиденциальности </Link>
                    </label>
                </Stack>

                <Button 
                    type="submit" 
                    className={styles.signUpBtn}
                >
                    Зарегистрироваться
                </Button>

                <Text className={styles.account}>
                    Уже есть аккаунт? <Link to={getRouteSignin()} className={styles.signInLink}>Войти</Link>
                </Text>
            </Stack>
        </form>
    );
};


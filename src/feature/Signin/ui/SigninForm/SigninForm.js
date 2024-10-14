import styles from './SigninForm.module.scss';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../shared/ui/Text/Text';
import { Input } from '../../../../shared/ui/Input/Input';
import { Button } from '../../../../shared/ui/Button/Button';
import { HidePasswordIcon, ShowPasswordIcon } from '../../../../shared/assets/svg/passwordIcons';
import { logoIcon } from '../../../../shared/assets/svg/navbarIcons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRouteSignup } from '../../../../app/routes/lib/helper';
import { CheckmarkIcon } from '../../../../shared/assets/svg/checkmarkIcon';

export const SigninForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const PasswordToggleIcon = showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.logo}>
                {logoIcon()}
            </div>
            <Stack direction="column" gap='32'>
                <Text type="h2" size="xl" className={styles.heading}>Войти</Text>
                <Text type="p" size="xs" className={styles.par}>Заполните данные для доступа к вашему аккаунту.</Text>

                <Input
                    label="Электронная почта"
                    type="email"
                    placeholder="Введите адрес электронной почты"
                    id="email"
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
                        </span> запомнить меня
                    </label>
                    <Link to="/" className={styles.forgotPassword}>Забыли пароль?</Link>
                </Stack>

                <Button size="xs" color="primary" type="submit" className={styles.signInBtn}>Войти</Button>

                <Text type="p" size="xs" className={styles.account}>
                    Нет аккаунта? <Link to={getRouteSignup()} className={styles.signUpLink}>Зарегистрироваться</Link>
                </Text>
            </Stack>
        </form>
    );
};


import styles from './Signin.module.scss';
import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import { Input } from '../../../shared/ui/Input/Input';
import { Button } from '../../../shared/ui/Button/Button';
import { hidePasswordIcon, showPasswordIcon } from '../../../shared/assets/svg/passwordIcons';
import { logoIcon } from '../../../shared/assets/svg/navbarIcons';
import checkmarkIcon from '../../../shared/assets/svg/checkmarkIcon.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const PasswordToggleIcon = showPassword ? hidePasswordIcon : showPasswordIcon;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.logo}>
                {logoIcon()}
            </div>
            <Stack direction="column">
                <Text type="h2" size="xl" className={styles.heading}>Войти</Text>
                <Text type="p" size="xs" className={styles.par}>Пожалуйста, заполните данные для доступа к вашему аккаунту.</Text>

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
                        <PasswordToggleIcon />
                    </button>
                </Stack>

                <Stack justify="justifyBetween" align="center">
                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            className={styles.hiddenCheckbox} // Добавляем скрытый чекбокс
                        />
                        <span className={styles.customCheckbox}>
                            <img src={checkmarkIcon} alt="checkmark" />
                        </span> запомнить меня
                    </label>
                    <Link to="/" className={styles.forgotPassword}>Забыли пароль?</Link>
                </Stack>

                <Button size="xs" color="primary" type="submit" className={styles.signUpBtn}>Войти</Button>

                <Text type="p" size="xs" className={styles.account}>
                    Нет аккаунта? <Link to="/" className={styles.signUpLink}>Зарегистрироваться</Link>
                </Text>
            </Stack>
        </form>
    );
};

import styles from "./ForgotPasswordForm.module.scss";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from '../../../../shared/ui/Text/Text';
import { Input } from '../../../../shared/ui/Input/Input';
import { Button } from '../../../../shared/ui/Button/Button';
import { logoIcon } from '../../../../shared/assets/svg/navbarIcons';
import { Link } from 'react-router-dom';

export const ForgotPasswordForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.logo}>
                {logoIcon()}
            </div>
            <Stack direction="column">
                <Text type="h2" size="xl" className={styles.heading}>Восстановить пароль?</Text>
                <Text type="p" size="xs" className={styles.par}>Не беспокойтесь, мы отправим вам инструкции по сбросу пароля.</Text>

                <Input
                    label="Электронная почта"
                    type="email"
                    placeholder="Введите адрес электронной почты"
                    id="email"
                    className={styles.email}

                />
                <Button size="xs" color="primary" type="submit" className={styles.submitBtn}>Отправить</Button>

                <Text type="p" size="xs" className={styles.account}>
                    Помните пароль? <Link to="/" className={styles.signInLink}>Войти</Link>
                </Text>
            </Stack>
        </form>
    )
}
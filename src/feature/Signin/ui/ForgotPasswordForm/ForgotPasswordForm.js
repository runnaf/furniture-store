import styles from "./ForgotPasswordForm.module.scss";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from '../../../../shared/ui/Text/Text';
import { Input } from '../../../../shared/ui/Input/Input';
import { Button } from '../../../../shared/ui/Button/Button';
import { LogoIcon } from '../../../../shared/assets/svg/navbarIcons';
import { Link } from 'react-router-dom';
import { data } from "../../../../shared/libs/validation/errors/data";
import { emailRegex } from "../../../../shared/libs/validation/getValidate";
import { useFormContext } from "react-hook-form";
import { getRouteMain } from "../../../../app/routes/lib/helper";

export const ForgotPasswordForm = ({ onSubmit, setIsForgotten }) => {

    const { register, setValue, handleSubmit, formState: { errors } } = useFormContext(); 

    return (
        <form 
            className={styles.form} 
            onSubmit={handleSubmit(onSubmit)}>
            <Link to={getRouteMain()}>
                <LogoIcon />
            </Link>
            <Stack direction="column" gap='32'>
                <Text type="h2" size="xl">Восстановить пароль?</Text>
                <Text className={styles.par}>
                    Мы отправим вам инструкции по сбросу пароля.
                </Text>

                <Input
                    label="Электронная почта"
                    type="email"
                    placeholder="Введите адрес электронной почты"
                    name="email"
                    register={register}
                    setValue={setValue}
                    options={{
                        required: data.required,
                        pattern: {
                            value: emailRegex,
                            message: data.errors.validEmail
                        }
                    }}
                    error={errors.email}
                />
                <Button 
                    type="submit" 
                    className={styles.submitBtn}
                >
                    Отправить
                </Button>

                <Text className={styles.account}>
                    Помните пароль? 
                    <button 
                        className={styles.signInLink}
                        onClick={() => setIsForgotten(false)}
                    >
                        Войти
                    </button>
                </Text>
            </Stack>
        </form>
    )
}
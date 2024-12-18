import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../shared/ui/Text/Text';
import { Input } from '../../../../shared/ui/Input/Input';
import { Button } from '../../../../shared/ui/Button/Button';
import { HidePasswordIcon, ShowPasswordIcon } from '../../../../shared/assets/svg/passwordIcons';
import { LogoIcon } from '../../../../shared/assets/svg/navbarIcons';
import { getRouteMain } from '../../../../app/routes/lib/helper';
import { emailRegex } from '../../../../shared/libs/validation/getValidate';
import { data } from '../../../../shared/libs/validation/errors/data'
import Cookies from "js-cookie";
import { useLoginMutation } from '../../api/signinApi';
import styles from './SigninForm.module.scss';
import showAlert from '../../../../widgets/Alert/Alert';


export const SigninForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useFormContext();
    const PasswordToggleIcon = showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />;
    
    const [loginUser, { error, isLoading }] = useLoginMutation();

    console.log(error, isLoading) //todo

    const onSubmit = async (formData) => {
        const { email, password } = formData;
        try {
            const response = await loginUser({ email, password }).unwrap();
            if (response?.token) {
                Cookies.set(
                'authToken', response.token.accessToken, { secure: true },
                'refreshToken', response.token.refreshToken, { secure: true })
                showAlert('Вы успешно авторизовались!');
            }
            reset()
        } catch (err) {
            console.error('Ошибка авторизации:', err)
            showAlert('Ошибка авторизации. Проверьте свои данные и попробуйте снова.');
        }
    }

    return (
        <form 
            className={styles.form} 
            onSubmit={handleSubmit(onSubmit)}
        >
            <Link to={getRouteMain()}>
                <LogoIcon />
            </Link>

            <Stack direction="column" gap='32'>
                <Text type="h2" size="xl">
                    Войти
                </Text>
                <Text className={styles.par}>
                    Заполните данные для доступа к вашему аккаунту.
                </Text>

                <Stack direction="column" gap='8'>
                    <Input
                        label="Электронная почта"
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

                    <Stack 
                        direction='column' 
                        className={styles.password}
                    >
                        <Input
                            label="Пароль"
                            type={!showPassword ? 'password' : 'text'}
                            placeholder=" введите пароль"
                            name='password'
                            register={register}
                            setValue={setValue}
                            options={{
                                required: data.required,
                            }}
                            error={errors.password}
                        />
                        <button 
                            type='button' 
                            className={styles.password_btn}
                                onClick={() => setShowPassword(!showPassword)}
                        >
                            {PasswordToggleIcon}
                        </button>
                    </Stack>
                </Stack>

                <Button type="submit" className={styles.signInBtn}>
                    Войти
                </Button>
            </Stack>
        </form>
    );
};

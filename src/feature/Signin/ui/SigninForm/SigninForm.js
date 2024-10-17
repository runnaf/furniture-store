import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../shared/ui/Text/Text';
import { Input } from '../../../../shared/ui/Input/Input';
import { Button } from '../../../../shared/ui/Button/Button';
import { HidePasswordIcon, ShowPasswordIcon } from '../../../../shared/assets/svg/passwordIcons';
import { LogoIcon } from '../../../../shared/assets/svg/navbarIcons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRouteMain, getRouteSignup } from '../../../../app/routes/lib/helper';
import { CheckmarkIcon } from '../../../../shared/assets/svg/checkmarkIcon';
import styles from './SigninForm.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { emailRegex } from '../../../../shared/libs/validation/getValidate';
import { data } from '../../../../shared/libs/validation/errors/data'

export const SigninForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const PasswordToggleIcon = showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />;

    const methods = useForm({mode: "onSubmit"})
    const { register, handleSubmit, setValue, reset, formState: { errors } } = methods;

    const onSubmit = () => {
        reset()
    }

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

                    <Input
                        label="Электронная почта"
                        placeholder="Введите адрес электронной почты"
                        id="email"
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

                    <Stack direction='column' className={styles.password}>
                        <Input
                            label="Пароль"
                            type={!showPassword ? 'password' : 'text'}
                            placeholder=" введите пароль"
                            id="password"
                            name='password'
                            register={register}
                            setValue={setValue}
                            options={{
                                required: data.required,
                            }}
                            error={errors.password}
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
                        
                        {/* TODO */}
                        <Link to="/" className={styles.forgotPassword}>Забыли пароль?</Link>
                    </Stack>

                    <Button type="submit" className={styles.signInBtn}>
                        Войти
                    </Button>

                    <Text className={styles.account}>
                        Нет аккаунта? 
                        <Link to={getRouteSignup()} className={styles.signUpLink}>Зарегистрироваться</Link>
                    </Text>
                </Stack>
            </form>
        </FormProvider>
    );
};

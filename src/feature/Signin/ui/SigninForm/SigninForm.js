import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../shared/ui/Text/Text';
import { Input } from '../../../../shared/ui/Input/Input';
import { Button } from '../../../../shared/ui/Button/Button';
import { HidePasswordIcon, ShowPasswordIcon } from '../../../../shared/assets/svg/passwordIcons';
import { LogoIcon } from '../../../../shared/assets/svg/navbarIcons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRouteMain, getRouteSignup } from '../../../../app/routes/lib/helper';
import { useFormContext } from 'react-hook-form';
import { emailRegex } from '../../../../shared/libs/validation/getValidate';
import { data } from '../../../../shared/libs/validation/errors/data'
import { Checkbox } from '../../../../shared/ui/Checkbox/Checkbox';
import styles from './SigninForm.module.scss';

export const SigninForm = ({ onSubmit }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false); //TODO

    const { register, setValue, formState: { errors } } = useFormContext(); 

    const PasswordToggleIcon = showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />;

    const handleCheckboxChange = (name, checked) => {
        console.log(name);
        setRememberMe(checked);
    }; //TODO

    return (
        <form 
            className={styles.form} 
            onSubmit={onSubmit}
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

                    <Stack 
                        direction='column' 
                        className={styles.password}
                    >
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
                        <button 
                            type='button' 
                            className={styles.password_btn}
                                onClick={() => setShowPassword(!showPassword)}
                        >
                            {PasswordToggleIcon}
                        </button>
                    </Stack>
                </Stack>

                <Stack 
                    justify="justifyBetween" 
                    align="center"
                >
                    <Checkbox 
                        checked={rememberMe} 
                        name='remember' 
                        onChange={handleCheckboxChange} 
                    >
                        запомнить меня
                    </Checkbox>
                    
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
    );
};

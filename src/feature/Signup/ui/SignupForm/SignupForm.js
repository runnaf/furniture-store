import styles from './SignupForm.module.scss';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../shared/ui/Text/Text';
import { Input } from '../../../../shared/ui/Input/Input';
import { Button } from '../../../../shared/ui/Button/Button';
import { HidePasswordIcon, ShowPasswordIcon } from '../../../../shared/assets/svg/passwordIcons';
import { LogoIcon } from '../../../../shared/assets/svg/navbarIcons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRouteMain, getRouteSignin } from '../../../../app/routes/lib/helper';
import { useFormContext } from 'react-hook-form';
import { emailRegex, textRegex, validatePassword } from '../../../../shared/libs/validation/getValidate';
import { data } from '../../../../shared/libs/validation/errors/data';
import { Checkbox } from '../../../../shared/ui/Checkbox/Checkbox';

export const SignupForm = ({ onSubmit }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [agreeWithTerms, setAgreeWithTerms] = useState(false); //TODO

    const { register, setValue, handleSubmit, formState: { errors } } = useFormContext();
    const PasswordToggleIcon = showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />;

    const handleCheckboxChange = (name, checked) => {
        console.log(name);
        setAgreeWithTerms(checked);
    }; //TODO

    return (
            <form 
                className={styles.form} 
                onSubmit={handleSubmit(onSubmit)}
            >
                <Link to={getRouteMain()}>
                    <LogoIcon />
                </Link>

                <Stack direction="column" gap="32">
                    <Text type="h2" size="xl" >Регистрация</Text>

                    <Stack direction="column" gap="8">
                        <Stack gap='16' className={styles.name}>
                            <Input
                                label="Имя"
                                placeholder="Введите имя"
                                className={styles.firstname}
                                name="name"
                                register={register}
                                setValue={setValue}
                                options={{
                                    required: data.required,
                                    pattern: {
                                        value: textRegex,
                                        message: data.errors.validName
                                    }
                                }}
                                error={errors.name}
                            />
                            <Input
                                label="Фамилия"
                                placeholder="Введите фамилию"
                                name="surname"
                                register={register}
                                setValue={setValue}
                                options={{
                                    required: data.required,
                                    pattern: {
                                        value: textRegex,
                                        message: data.errors.validName
                                    }
                                }}
                                error={errors.surname}
                            />
                        </Stack>
                        <Input
                            label="Электронная почта"
                            placeholder="Введите адрес электронной почты"
                            className={styles.email}
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
                                name="password"
                                register={register}
                                setValue={setValue}
                                options={{
                                    required: data.required,
                                    validate: validatePassword,
                                }}
                                error={errors.password}
                            />
                            <button 
                                type='button'
                                className={styles.password_btn}
                                onClick={() => setShowPassword(!showPassword)}>
                                {PasswordToggleIcon}
                            </button>
                        </Stack>

                        <Stack justify="justifyBetween" align="center">
                            <Checkbox 
                                checked={agreeWithTerms} 
                                name='agree' 
                                onChange={handleCheckboxChange} 
                            >
                                Согласен с 
                                {/* TODO */}
                                <Link to='/' className={styles.linkAgree}> Условиями </Link> и 
                                <Link to='/' className={styles.linkAgree}> Политикой Конфиденциальности </Link>
                            </Checkbox>
                        </Stack>
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


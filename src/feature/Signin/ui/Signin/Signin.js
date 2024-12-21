import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { SigninForm } from "../SigninForm/SigninForm";
import { Checkbox } from "../../../../shared/ui/Checkbox/Checkbox";
import { Text } from "../../../../shared/ui/Text/Text";
import { getRouteMain, getRouteSignup } from "../../../../app/routes/lib/helper";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { ForgotPassword } from '../ForgotPassword/ForgotPassword';
import Cookies from "js-cookie";
import { useLoginMutation } from "../../api/signinApi";
import showAlert from "../../../../widgets/Alert/Alert";
import styles from './Signin.module.scss';


export const Signin = () => {
    const [rememberMe, setRememberMe] = useState(false); //TODO
    const [isForgotten, setIsForgotten] = useState(false);

    const methods = useForm({mode: "onSubmit"})
    const { handleSubmit, reset } = methods;
    const [loginUser, { error, isLoading }] = useLoginMutation()
    const navigate = useNavigate()

    const onSubmit = async (formData) => {
        const { email, password } = formData;
        try {
            const response = await loginUser({ email, password }).unwrap()
            if (response?.token) {
                Cookies.set(
                'authToken', response.token.accessToken, { secure: true },
                'refreshToken', response.token.refreshToken, { secure: true })
            }
            reset()
            navigate(getRouteMain())
        } catch (err) {
            console.error('Ошибка авторизации:', err)
            showAlert('Ошибка авторизации. Проверьте свои данные и попробуйте снова.');
        }
    }

    const handleCheckboxChange = (name, checked) => {
        console.log(name);
        setRememberMe(checked);
    }; //TODO

    return (
        <FormProvider {...methods}>
            {isForgotten 
            ? <ForgotPassword setIsForgotten={setIsForgotten} />
            : <Stack 
                direction="column" 
                justify='justifyCenter' 
                className={styles.signin}
                gap='24'
            >
                <SigninForm onSubmit={handleSubmit(onSubmit)}/>

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
                        
                        <button 
                            className={styles.forgotPassword}
                            onClick={() => setIsForgotten(true)}
                        >
                            Забыли пароль?
                        </button>
                </Stack>

                <Text className={styles.account}>
                    Нет аккаунта? <Link to={getRouteSignup()} className={styles.signUpLink}>Зарегистрироваться</Link>
                </Text>
            </Stack>}
        </FormProvider>
    );
}

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { SigninForm } from "../SigninForm/SigninForm";
import { Checkbox } from "../../../../shared/ui/Checkbox/Checkbox";
import { Text } from "../../../../shared/ui/Text/Text";
import { getRouteSignup } from "../../../../app/routes/lib/helper";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { ForgotPassword } from '../ForgotPassword/ForgotPassword';
import styles from './Signin.module.scss';

export const Signin = () => {
    const [rememberMe, setRememberMe] = useState(false); //TODO
    const [isForgotten, setIsForgotten] = useState(false);

    const methods = useForm({mode: "onSubmit"})

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
                <SigninForm/>

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
};

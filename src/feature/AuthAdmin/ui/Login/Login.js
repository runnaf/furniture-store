import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { useNavigate } from "react-router"
import { getRouteAdmin } from "../../../../app/routes/lib/helper"
import { HidePasswordIcon, ShowPasswordIcon } from "../../../../shared/assets/svg/passwordIcons"
import { data } from "../../../../shared/libs/validation/errors/data"
import { textRegex } from "../../../../shared/libs/validation/getValidate"
import { Button } from "../../../../shared/ui/Button/Button"
import { Input } from "../../../../shared/ui/Input/Input"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { Text } from "../../../../shared/ui/Text/Text"
import Cookies from "js-cookie";
import styles from './Login.module.scss'
import { useLoginAdminMutation } from "../../api/authAdminApi"

export const Login = ({handleChangeState}) => {

    const { register, setValue, handleSubmit, reset, formState: { errors }} = useFormContext()

    const [loginAdmin, {error, isLoading}] = useLoginAdminMutation()

    const navigate = useNavigate()

    console.log(error, isLoading)

    const onSubmit = async (formData) => {
        const { login , password } = formData;

        try {
            const response = await loginAdmin({ login, password }).unwrap();
            if (response?.token) {
                Cookies.set(
                'authToken', response.token.accessToken, { secure: true },
                'refreshToken', response.token.refreshToken, { secure: true })
            }
            reset()
            navigate(getRouteAdmin())
        } catch (err) {
            console.error('Ошибка входа:', err)
        }
    }
    
    const [showPassword, setShowPassword ] = useState(false)
    const PasswordToggleIcon = showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />

    return(
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form_container}
        >
            <Text
                type="h2"
                size="md"
            >
                Вход
            </Text>
            <Stack
                direction='column'
                justify='justifyCenter'
                gap='16'
                className={styles.authAdminMain}
            >
                <Input 
                    name='login'
                    placeholder='Введите логин'
                    register={register}
                    setValue={setValue}
                    options={{
                        required: data.required,
                        pattern: {
                            value: textRegex,
                            message: data.errors.validName
                        }
                    }}
                    error={errors.login}
                />
                <Stack
                    className={styles.password_container}
                >
                    <Input 
                        name='password'
                        placeholder='Введите пароль'
                        type={!showPassword ? 'password' : 'text'}
                        register={register}
                        setValue={setValue}
                        options={{
                            required: data.required,
                        }}
                        error={errors.password}
                    />
                    <Button 
                        className={styles.password_btn}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {PasswordToggleIcon}
                    </Button>
                </Stack>
                <Stack
                    direction='column'
                    align='alignCenter'
                    gap='16'
                    className={styles.btn_container}
                >
                    <Button 
                        type='submit'
                    >
                        Войти
                    </Button>
                    <Button
                        color="transparent"
                        onClick={handleChangeState}
                    >
                        Забыли пароль?
                    </Button>
                </Stack>
            </Stack>
        </form>
    )
}
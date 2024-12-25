import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { data } from "../../../../shared/libs/validation/errors/data";
import { emailRegex } from "../../../../shared/libs/validation/getValidate";
import { Button } from "../../../../shared/ui/Button/Button"
import { Input } from "../../../../shared/ui/Input/Input"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { Text } from "../../../../shared/ui/Text/Text";
import { Waiting } from "../../../../shared/ui/Waiting/Waiting";
import { useResetPasswordAdminMutation } from "../../api/authAdminApi";
import styles from './ForgotPassword.module.scss'

export const ForgotPassword = ({handleChangeState}) => {

    const { register, setValue, handleSubmit, formState: { errors } } = useFormContext(); 
    const [ isShow, setIsShow ] = useState(false)
    const [ reset_password, {error, isLoading}] = useResetPasswordAdminMutation()

    const onSubmit = async (formData) => {
        const { email } = formData
        try {
            await reset_password({ email }).unwrap()
            setIsShow(!isShow)
        } catch (e) {
            console.error('Ошибка сброса пароля:', e)
        }
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className={styles.forgotPassword_container}
        >
            <Text
                type="h2"
                size="md"
            >
                Сброс пароля
            </Text>

            {error && <Text className={styles.error}>
                {error.data.message}
            </Text>}

            {isShow ? 
            <Stack
                direction="column"
                gap='16'
                className={styles.instruction}
            >
                <Text
                    size="md"
                >
                    Инструкция по смене пароля отправлена на почту!
                </Text>
                <Button
                    onClick={handleChangeState}
                >
                    Страница входа
                </Button>
            </Stack>
            :
            <Stack
                direction="column"
                gap='16'
                className={styles.forgotPassword}
            >
                <Input
                    name='email'
                    register={register}
                    setValue={setValue}
                    placeholder='Введите почту'
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
                    direction="column"
                    gap='16'
                >
                    <Button onClick={handleChangeState}>
                        Отмена
                    </Button>

                    <Button>
                        {isLoading ? <Waiting/> : 'Сбросить пароль'}
                    </Button>
                </Stack>
            </Stack>}
        </form>
    )
}
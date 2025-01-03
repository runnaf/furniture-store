import { FormProvider, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router";
import { getRouteAuthAdmin } from "../../../../app/routes/lib/helper";
import { data } from "../../../../shared/libs/validation/errors/data";
import { Button } from "../../../../shared/ui/Button/Button";
import { Input } from "../../../../shared/ui/Input/Input"
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { Waiting } from "../../../../shared/ui/Waiting/Waiting";
import { useRefreshPasswordAdminMutation } from "../../api/authAdminApi";
import styles from './RefreshPassword.module.scss'

export const RefreshPassword = () => {

    const methods = useForm();
    const { register, handleSubmit, formState: { errors } } = methods
    const [refresh_password, {error, isLoading}] = useRefreshPasswordAdminMutation()

    const {resetToken} = useParams()
    const navigate = useNavigate()

    const onSubmit = async (formData) => {
        const { newPassword } = formData
        try {
            await refresh_password({ resetToken, newPassword }).unwrap()
            navigate(getRouteAuthAdmin())
        } catch (e) {
            console.error('Ошибка смена пароля:', e)
        }
        
    }

    return(
        <FormProvider {...methods}>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form_container}
            >
                <Stack
                    direction='column'
                    gap='16'
                >
                    {error && <Text className={styles.error}>
                        {error.data.message}
                    </Text>}
                    <Input
                        name='newPassword'
                        placeholder='Введите новый пароль'
                        register={register}
                        options={{
                            required: data.required,
                        }}
                        error={errors.newPassword}
                    />
                    <Button
                        type='submit'
                    >
                        {isLoading ? <Waiting/> : 'Сменить пароль'}
                    </Button>
                </Stack>
            </form>
        </FormProvider>
    )
}
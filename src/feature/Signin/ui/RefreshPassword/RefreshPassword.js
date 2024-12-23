import { FormProvider, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router"
import { getRouteSignin } from "../../../../app/routes/lib/helper"
import { useRefreshPasswordMutation } from "../../api/signinApi"
import { RefreshPasswordForm } from "../RefreshPasswordForm/RefreshPasswordForm"


export const RefreshPassword = () => {
    const methods = useForm()
    const { handleSubmit, reset } = methods

    const [refreshPassword, {error, isLoading}] = useRefreshPasswordMutation()

    const { resetToken } = useParams()
    const navigate = useNavigate()

    const onSubmit = async (formData) => {
        const { newPassword } = formData
        try {
            await refreshPassword({ resetToken, newPassword })
            reset()
            navigate(getRouteSignin())
        } catch (e) {
            console.error('Ошибка смены пароля:', e)
        }
    }

    return(
        <FormProvider {...methods}>
            <RefreshPasswordForm
                onSubmit={handleSubmit(onSubmit)} 
            />
        </FormProvider>
    )
}
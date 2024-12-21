import { FormProvider, useForm } from "react-hook-form";
import { useResetPasswordMutation } from "../../api/signinApi";
import { ForgotPasswordForm } from "../ForgotPasswordForm/ForgotPasswordForm";

export const ForgotPassword = ({ setIsForgotten }) => {
    const methods = useForm({mode: "onSubmit"})
    const { handleSubmit, reset } = methods;

    const [resetPassword, {error, isLoading}] = useResetPasswordMutation()

    const onSubmit = async (formData) => {
        const { email } = formData
        try{
            await resetPassword({ email })
            reset()
            setIsForgotten(false)
        } catch (e) {
            console.error('Ошибка сброса пароля:', e)
        }
    }

    return (
        <FormProvider {...methods}>
            <ForgotPasswordForm 
                onSubmit={handleSubmit(onSubmit)} 
                setIsForgotten={setIsForgotten}
            />
        </FormProvider>
    )
}
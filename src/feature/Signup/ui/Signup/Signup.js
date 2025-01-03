import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { getRouteSignin } from "../../../../app/routes/lib/helper";
import { useRegistrationMutation } from "../../../Signin/api/signinApi";
import { SignupForm } from "../SignupForm/SignupForm";

export const Signup = () => {

    const methods = useForm({mode: "onSubmit"})
    const { handleSubmit, reset } = methods;

    const [authUser, { error, isLoading }] = useRegistrationMutation()
    const navigate = useNavigate()

    const onSubmit = async (formData) => {
        console.log(formData)
        const { name, surname, password, email } = formData
        try {
            await authUser({ name, surname, password, email })
            reset()
            navigate(getRouteSignin())
        } catch (error) {
            console.error('Ошибка при регистрации:', error)
        }
    }

    return (
        <FormProvider {...methods}>
            <SignupForm 
                onSubmit={handleSubmit(onSubmit)}
                isLoad={isLoading}
                error={error}
            />
        </FormProvider>
    );
};

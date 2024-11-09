import { FormProvider, useForm } from "react-hook-form";
import { ForgotPasswordForm } from "../ForgotPasswordForm/ForgotPasswordForm";

export const ForgotPassword = ({ setIsForgotten }) => {
    const methods = useForm({mode: "onSubmit"})
    const { handleSubmit, reset } = methods;

    const onSubmit = () => {
        reset();
    };

    return (
        <FormProvider {...methods}>
            <ForgotPasswordForm 
                onSubmit={handleSubmit(onSubmit)} 
                setIsForgotten={setIsForgotten}
            />
        </FormProvider>
    );
};
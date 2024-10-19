import { FormProvider, useForm } from "react-hook-form";
import { SignupForm } from "../SignupForm/SignupForm";

export const Signup = () => {
    const methods = useForm({mode: "onSubmit"})
    const { handleSubmit, reset } = methods;

    const onSubmit = () => {
        reset()
    };
    return (
    <FormProvider {...methods}>
        <SignupForm onSubmit={handleSubmit(onSubmit)}/>
    </FormProvider>)
};

import { FormProvider, useForm } from "react-hook-form";
import { SigninForm } from "../SigninForm/SigninForm";

export const Signin = () => {
    const methods = useForm({mode: "onSubmit"})
    const { handleSubmit, reset } = methods;

    const onSubmit = () => {
        reset()
    };

    return (
        <FormProvider {...methods}>
            <SigninForm onSubmit={handleSubmit(onSubmit)}/>
        </FormProvider>
    );
};

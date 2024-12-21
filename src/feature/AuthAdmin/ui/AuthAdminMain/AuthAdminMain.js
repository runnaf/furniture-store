import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { ForgotPassword } from "../ForgotPassword/ForgotPassword"
import { Login } from "../Login/Login"

export const AuthAdminMain = () => {

    const methods = useForm({mode: "onSubmit"})

    const [forgotPassword, setForgotPassword] = useState(false)

    const handleChangeState = () => {
        setForgotPassword(!forgotPassword)
    }

    return(
        <FormProvider {...methods}>
            {forgotPassword ? 
            <ForgotPassword handleChangeState={handleChangeState}/>
            :
            <Login handleChangeState={handleChangeState}/>}
        </FormProvider>
    )
}
import { Slider } from "../../../entities/Slider/ui/Slider";
import { SigninForm } from "../../../feature/Signin/ui/SigninForm";
import { Stack } from "../../../shared/ui/Stack/Stack";



const SigninPage = () => {
    return (
        <Stack justify='justifyAround' align='alignCenter'>
            <SigninForm />
            <Slider />
        </Stack>
    )
}

export default SigninPage;
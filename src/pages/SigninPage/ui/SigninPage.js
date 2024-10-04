import { Slider } from "../../../entities/Slider/ui/Slider";
import { Signin } from "../../../feature/Signin/ui/Signin/Signin";
import { Stack } from "../../../shared/ui/Stack/Stack";



const SigninPage = () => {
    return (
        <Stack justify='justifyAround' align='alignCenter'>
            <Signin />
            <Slider />
        </Stack>
    )
}

export default SigninPage;
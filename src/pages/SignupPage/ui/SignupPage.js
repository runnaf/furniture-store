import { Slider } from "../../../entities/Slider/ui/Slider";
import { Signup } from "../../../feature/Signup/ui/Signup";
import { Stack } from "../../../shared/ui/Stack/Stack";



const SignupPage = () => {
    return (
        <Stack justify='justifyAround' align='alignCenter'>
            <Signup />
            <Slider />
        </Stack>
    )
}

export default SignupPage;
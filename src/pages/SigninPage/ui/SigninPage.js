import { Slider } from "../../../entities/Slider/ui/Slider";
import { Signin } from "../../../feature/Signin/ui/Signin/Signin";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './SigninPage.module.scss';

const SigninPage = () => {
    return (
        <Stack 
            className={styles.signin_page} 
            justify='justifyBetween' 
        >
            <Signin />
            <Slider />
        </Stack>
    )
}

export default SigninPage;
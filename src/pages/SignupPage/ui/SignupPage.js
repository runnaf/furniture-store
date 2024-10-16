import { Slider } from "../../../entities/Slider/ui/Slider";
import { Signup } from "../../../feature/Signup/ui/Signup/Signup";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './SignupPage.module.scss';

const SignupPage = () => {
    return (
        <Stack 
        className={styles.signup_page} 
            justify='justifyBetween' 
            align='alignCenter'
        >
            <Signup />
            <Slider />
        </Stack>
    );
};

export default SignupPage;

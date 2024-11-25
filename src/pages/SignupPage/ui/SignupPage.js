import { Signup } from "../../../feature/Signup/ui/Signup/Signup";
import { useResize } from "../../../shared/hooks/useResize";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { SliderForAuthorization } from "../../../widgets/SliderForAuthorization/ui/SliderForAuthorization";
import styles from './SignupPage.module.scss';

const DESKTOP_WIDTH = 1280;

const SignupPage = () => {
    const width = useResize();
    const isDesktop = width > DESKTOP_WIDTH;
    return (
        <Stack 
        className={styles.signup_page} 
            justify='justifyBetween' 
            align='alignCenter'
            gap='75'
        >
            <Signup />
            {isDesktop && <SliderForAuthorization />}
        </Stack>
    );
};

export default SignupPage;

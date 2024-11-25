
import { Signin } from "../../../feature/Signin/ui/Signin/Signin";
import { useResize } from "../../../shared/hooks/useResize";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { SliderForAuthorization } from "../../../widgets/SliderForAuthorization/ui/SliderForAuthorization";
import styles from './SigninPage.module.scss';

const DESKTOP_WIDTH = 1280;

const SigninPage = () => {
  const width = useResize();
  const isDesktop = width > DESKTOP_WIDTH;

    return (
        <Stack 
            className={styles.signin_page} 
            justify='justifyBetween'
            align='alignCenter'
            gap='75' 
        >
            <Signin />
            {isDesktop && <SliderForAuthorization />}
        </Stack>
    )
}

export default SigninPage;

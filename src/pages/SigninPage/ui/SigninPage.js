import { SignIn } from "../../../feature/Signin/ui/Signin";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from "./SigninPage.module.scss";
import imageSigninPage from "../../../shared/assets/svg/imageSigninPage.svg"



const SigninPage = () => {
    return (
        <Stack justify='justifyAround' align='alignCenter'>
            <SignIn />
            <img src={imageSigninPage} className={styles.image} alt="signin" />
        </Stack>
    )
}

export default SigninPage;
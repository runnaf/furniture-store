import imageSigninPage from "../../../shared/assets/svg/imageSigninPage.svg"
import styles from "./Slider.module.scss";

export const Slider = () => {
    return (
        <>
        <img src={imageSigninPage} className={styles.image} alt="signin" />
        </>
    )
}
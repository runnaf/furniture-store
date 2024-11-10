import { getStyles } from "../../../../../../shared/libs/getStyles";
import styles from "./BottomButton.module.scss"

export const BottomButton = ({
        currentSlide, 
        handleClickSlide,
        page,
        color,
        children, 
        className
    }) => {

        const mode = {
            [styles.current] : currentSlide === page
        };

        const additional = [
            className,
            styles[color],
        ];

        const stylesBottomButton = getStyles(styles.button, mode, additional)

    return (
        <li className={styles.container} onClick = {()=> handleClickSlide(page)}>
            <button type="button" className={stylesBottomButton}>
                {children}
            </button>
        </li>
    )
}
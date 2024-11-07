import { getStyles } from "../../../../shared/libs/getStyles";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./Quantity.module.scss"


export const Quantity = ({count, increaseCount, decreaseCount, className}) => {
    const stylesClass = getStyles(styles.containerButton, true, [className])
    return (
        <Stack className={stylesClass} align="alignCenter" justify="justifyBetween">
            <button type="button" onClick={decreaseCount} disabled={count === 1}></button>
            <span>{count}</span>
            <button type="button" onClick={increaseCount}></button>
        </Stack>
    )
}

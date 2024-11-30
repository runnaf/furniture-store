import { useState } from "react";
import { getStyles } from "../../../../shared/libs/getStyles";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./Quantity.module.scss"


export const Quantity = ({quantity, className}) => {
    const stylesClass = getStyles(styles.containerButton, true, [className]);

    const [count, setCount] = useState(quantity);

    const increaseCount = () =>{
        setCount(count + 1)
    }
    const decreaseCount = () => {
        if (count !== 1) {
            setCount(count - 1)
        }
    }
    return (
        <Stack className={stylesClass} align="alignCenter" justify="justifyBetween">
            <button type="button" onClick={decreaseCount} disabled={count === 1}></button>
            <span>{count}</span>
            <button type="button" onClick={increaseCount}></button>
        </Stack>
    )
}

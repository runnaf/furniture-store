import { getStyles } from "../../../../shared/libs/getStyles";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./Quantity.module.scss"


export const Quantity = ({className, quantity, setQuantity, addToCart, removeToCart}) => {
    const stylesClass = getStyles(styles.containerButton, true, [className]);

    const increaseCount = () =>{
      setQuantity(quantity + 1)
      if (addToCart) {
        addToCart()
      }
    }
    const decreaseCount = () => {
        if (quantity !== 1) {
          setQuantity(quantity - 1)
        }
        if (removeToCart) {
          removeToCart()
        }
    }
    return (
        <Stack className={stylesClass} align="alignCenter" justify="justifyBetween">
            <button type="button" onClick={decreaseCount} disabled={quantity === 1}></button>
            <span>{quantity}</span>
            <button type="button" onClick={increaseCount}></button>
        </Stack>
    )
}

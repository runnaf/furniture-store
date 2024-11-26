import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { Quantity } from "../../../AddToCart/ui/Quantity/Quantity";
import { getColorTitle } from "../../../AddToCart/lib/helper";
import { data } from "../../lib/data.js"
import styles from "./GoodsInCart.module.scss";

export const GoodsInCart = () => {
  const {image, title, quantity, price, color} = data[0];
  const totalGoodPrice = quantity*price;

  return (
      <tr className={styles.container}>
        <td>
          <Stack align="alignCenter" gap="12">
            <button type="button" className={styles.buttonClear}>
              <VisuallyHidden>Удалить товар из корзины</VisuallyHidden>
            </button>
            <img src={image} alt={title} width="90" height="108"/>
            <Stack justify="justifyCenter" align="alignStart" direction="column" gap="4">
              <Text type="h3">{title}</Text>
              <Text>Цвет: {getColorTitle(color)}</Text>
            </Stack>
          </Stack>
        </td>
        <td>
          {price} руб.
        </td>
        <td>
          <Quantity quantity={quantity} increaseCount decreaseCount />
        </td>
        <td>
          {totalGoodPrice} руб.
        </td>
      </tr>
  )
}

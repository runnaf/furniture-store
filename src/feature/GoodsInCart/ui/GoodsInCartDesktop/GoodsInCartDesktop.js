import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { Quantity } from "../../../AddToCart/ui/Quantity/Quantity";
import { getColorTitle } from "../../../AddToCart/lib/helper";
import styles from "./GoodsInCartDesktop.module.scss";
import { ButtonClear } from "../ButtonClear/ButtonClear";

export const GoodsInCartDesktop = ({image, title, quantity, price, color}) => {
  const totalGoodPrice = quantity*price;

  return (
      <tr className={styles.container}>
        <td>
          <Stack align="alignCenter" gap="12">
            <ButtonClear />
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

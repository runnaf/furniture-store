import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { getColorTitle } from "../../../AddToCart/lib/helper";
import { Quantity } from "../../../AddToCart/ui/Quantity/Quantity";
import { ButtonClear } from "../ButtonClear/ButtonClear";
import styles from "./GoodsInCartMobile.module.scss";

export const GoodsInCartMobile = ({image, title, quantity, price, color}) => {
  const totalGoodPrice = quantity*price;

  return (
    <li className={styles.container}>
      <Stack align="alignStart" gap="16" justify="justifyBetween">
        <Stack gap="16">
          <img src={image} alt={title} width="90" height="108"/>
          <Stack justify="justifyCenter" align="alignStart" direction="column" gap="4">
            <Text type="h3">{title}</Text>
            <Text>Цвет: {getColorTitle(color)}</Text>
            <Text>{price} руб.</Text>
          </Stack>
        </Stack>
        <ButtonClear />
      </Stack>
      <Stack justify="justifyBetween" gap="16" align="alignCenter">
        <Quantity quantity={quantity} increaseCount decreaseCount />
        <Text>{totalGoodPrice} руб.</Text>
      </Stack>
    </li>
  )
}
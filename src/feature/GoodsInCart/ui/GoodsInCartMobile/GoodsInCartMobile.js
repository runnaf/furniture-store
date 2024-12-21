import { useState } from "react";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { getColorTitle } from "../../../AddToCart/lib/helper";
import { Quantity } from "../../../AddToCart/ui/Quantity/Quantity";
import { ButtonClear } from "../ButtonClear/ButtonClear";
import styles from "./GoodsInCartMobile.module.scss";

export const GoodsInCartMobile = ({ image, name, quantity, sale_price, color, id }) => {
  const totalGoodPrice = quantity * sale_price;

  const [count, setCount] = useState(quantity)

  return (
    <li className={styles.container}>
      <Stack align="alignStart" gap="16" justify="justifyBetween">
        <Stack gap="16">
          <img src={image} alt={name} width="90" height="108" />
          <Stack
            justify="justifyCenter"
            align="alignStart"
            direction="column"
            gap="4"
          >
            <Text type="h3">{name}</Text>
            <Text>Цвет: {getColorTitle(color)}</Text>
            <Text>{sale_price} руб.</Text>
          </Stack>
        </Stack>
        <ButtonClear id={id} color={color} />
      </Stack>
      <Stack justify="justifyBetween" gap="16" align="alignCenter">
        <Quantity quantity={count} setQuantity={setCount} />
        <Text>{totalGoodPrice} руб.</Text>
      </Stack>
    </li>
  );
};

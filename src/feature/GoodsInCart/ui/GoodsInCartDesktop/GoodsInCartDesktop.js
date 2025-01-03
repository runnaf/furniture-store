import { useState } from "react";
import { useDispatch } from "react-redux";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { Quantity } from "../../../AddToCart/ui/Quantity/Quantity";
import { getColorTitle } from "../../../AddToCart/lib/helper";
import { ButtonClear } from "../ButtonClear/ButtonClear";
import { addToCart, removeFromCart } from "../../../AddToCart/model/cartSlice";
import styles from "./GoodsInCartDesktop.module.scss";

export const GoodsInCartDesktop = ({
  image,
  name,
  quantity,
  sale_price,
  color,
  price,
  id
}) => {
  const totalGoodPrice = quantity * sale_price;
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ color, quantity, name, sale_price, price, id, image }));
  };
  
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id, color }));
  };

  return (
    <tr className={styles.container}>
      <td>
        <Stack align="alignCenter" gap="12">
          <ButtonClear id={id} color={color} />
          <img src={image} alt={name} width="90" height="108" />
          <Stack
            justify="justifyCenter"
            align="alignStart"
            direction="column"
            gap="4"
          >
            <Text type="h3">{name}</Text>
            <Text>Цвет: {getColorTitle(color)}</Text>
          </Stack>
        </Stack>
      </td>
      <td>{sale_price} руб.</td>
      <td>
        <Quantity quantity={count} setQuantity={setCount} addToCart={handleAddToCart} removeToCart={handleRemoveFromCart} />
      </td>
      <td>{totalGoodPrice} руб.</td>
    </tr>
  );
};

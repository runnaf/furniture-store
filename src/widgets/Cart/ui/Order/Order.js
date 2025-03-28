import { getRouteCheckout } from "../../../../app/routes/lib/helper";
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { OrderItem } from "../OrderItem/OrderItem";
import styles from "./Order.module.scss";

export const Order = ({items, totalPrice, discount, coupon=0}) => {
  const price = totalPrice - discount - coupon;
  const dataOrder = {
    количество: items,
    стоимость: `${totalPrice} руб.`,
    скидка:`-${discount} руб.`,
    купон: `${coupon === 0 ? coupon : - coupon } руб.`,
    Всего: `${price} руб.`
  }

  return (
    <Stack className={styles.container} direction="column" gap="32" justify="justifyCenter">
      <Text type="h3">Заказ</Text>
      <Stack direction="column" gap="32">
        {
          Object.entries(dataOrder).map(([title, quantity]) => (
            <OrderItem title={title} quantity={quantity} key={title} />
          ))
        }
      </Stack>
      <LinkCustom path={getRouteCheckout()} disabled={items===0? 'disabled' : ''}>Оформить</LinkCustom>
    </Stack>
  )
}

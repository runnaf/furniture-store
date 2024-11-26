import { ClearCart } from "../../../../feature/GoodsInCart/ui/ClearCart/ClearCart"
import { Coupon } from "../../../../feature/GoodsInCart/ui/Coupon/Coupon"
import { GoodsInCart } from "../../../../feature/GoodsInCart/ui/GoodsInCart/GoodsInCart";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Order } from "../Order/Order";
import { data } from "../../../../feature/GoodsInCart/lib/data.js";
import styles from "./Cart.module.scss";

export const Cart = () => {

  return (
    <Stack className={styles.wrapper} justify="justifyBetween" gap="32">
      <Stack gap="32" direction="column">
        <GoodsInCart data={data} />        
        <Stack className={styles.container} gap="32">
          <Coupon />
          <ClearCart />
        </Stack>
      </Stack>
      <Order items='9' totalPrice='250' discount='10' coupon='10'/>
    </Stack>
  )
}

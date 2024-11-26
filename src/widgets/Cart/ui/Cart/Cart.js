import { ClearCart } from "../../../../feature/GoodsInCart/ui/ClearCart/ClearCart"
import { Coupon } from "../../../../feature/GoodsInCart/ui/Coupon/Coupon"
import { GoodsInCart } from "../../../../feature/GoodsInCart/ui/GoodsInCart/GoodsInCart"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { HeaderCart } from "../HeaderCart/HeaderCart";
import { Order } from "../Order/Order";
import styles from "./Cart.module.scss";

export const Cart = () => {
  return (
    <Stack className={styles.wrapper} justify="justifyBetween" gap="32">
      <Stack gap="32" direction="column">
        <table className={styles.container}>
          <thead className={styles.header}>
            <HeaderCart />
          </thead>
          <tbody>
            <GoodsInCart />
            <GoodsInCart />
          </tbody>
        </table>
        <Stack>
          <Coupon />
          <ClearCart />
        </Stack>
      </Stack>
      <Order items='9' totalPrice='250' discount='10' coupon='10'/>
    </Stack>
    
  )
}
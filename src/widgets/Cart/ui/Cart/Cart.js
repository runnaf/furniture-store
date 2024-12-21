import { ClearCart } from "../../../../feature/GoodsInCart/ui/ClearCart/ClearCart"
import { Coupon } from "../../../../feature/GoodsInCart/ui/Coupon/Coupon"
import { GoodsInCart } from "../../../../feature/GoodsInCart/ui/GoodsInCart/GoodsInCart";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Order } from "../Order/Order";
import { useSelector } from "react-redux";
import { NoProductInCart } from "../NoProductInCart/NoProductInCart";
import { selectTotalItems, selectTotalPrice, selectTotalSalePrice } from "../../../../feature/AddToCart/model/cartSlice";
import styles from "./Cart.module.scss";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice).toFixed(2);
  const totalSalePrice = useSelector(selectTotalSalePrice).toFixed(2);
  const discount = (totalPrice - totalSalePrice).toFixed(2)

  return (
    <Stack className={styles.wrapper} justify="justifyBetween" gap="32">
      {cartItems.length === 0 ? 
        <NoProductInCart /> : 
        <Stack gap="32" direction="column">
          <GoodsInCart data={cartItems} />        
          <Stack className={styles.container} gap="32">
            <Coupon />
            <ClearCart />
          </Stack>
        </Stack>
      }
      
      <Order items={totalItems} totalPrice={totalPrice} discount={discount}/>
    </Stack>
  )
}

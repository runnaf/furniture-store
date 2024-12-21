import { useDispatch } from "react-redux";
import { Button } from "../../../../shared/ui/Button/Button";
import { clearCart } from "../../../AddToCart/model/cartSlice";
import styles from "./ClearCart.module.scss";

export const ClearCart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart()); // Это также должно быть просто действие
  };

  return (
    <Button className={styles.button} color="outlined" onClick={handleClearCart}>
      Очистить корзину
    </Button>
  );
};

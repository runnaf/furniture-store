import { useDispatch } from "react-redux";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { removeFromCartGoods } from "../../../AddToCart/model/cartSlice";
import styles from "./ButtonClear.module.scss";

export const ButtonClear = ({ id, color }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCartGoods = () => {
    dispatch(removeFromCartGoods({id, color}));
  };

  return (
    <button type="button" className={styles.buttonClear} onClick={handleRemoveFromCartGoods}>
      <VisuallyHidden>Удалить товар из корзины</VisuallyHidden>
    </button>
  );
};

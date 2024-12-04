import { Button } from "../../../../shared/ui/Button/Button";
import styles from "./ClearCart.module.scss";

export const ClearCart = () => {
  return (
    <Button className={styles.button} color="outlined">
      Очистить корзину
    </Button>
  );
};

import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from "./ButtonClear.module.scss";

export const ButtonClear = () => {
  return (
    <button type="button" className={styles.buttonClear}>
      <VisuallyHidden>Удалить товар из корзины</VisuallyHidden>
    </button>
  )
}

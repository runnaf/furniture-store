import { useResize } from "../../../../shared/hooks/useResize";
import { HeaderCart } from "../../../../widgets/Cart/ui/HeaderCart/HeaderCart";
import { GoodsInCartDesktop } from "../GoodsInCartDesktop/GoodsInCartDesktop";
import { GoodsInCartMobile } from "../GoodsInCartMobile/GoodsInCartMobile";
import styles from "./GoodsInCart.module.scss";

const WIDTH_MOBILE = 767;

export const GoodsInCart = ({data}) => {
  const width = useResize();
  const isDesktop = width > WIDTH_MOBILE;

  return isDesktop ?  (
    <table className={styles.container}>
      <thead className={styles.header}>
        <HeaderCart />
      </thead>
      <tbody>
        {data.map((good, index) => (
          <GoodsInCartDesktop key={index} {...good} />
        ))}
      </tbody>
    </table>
  ) : (
    <ul className={styles.containerMobile}>
      {data.map((good, index) => (
        <GoodsInCartMobile key={index} {...good} />
      ))}
    </ul>
  )
}
import { routes } from "../../app/routes/lib/data"
import { Advantages } from "../../entities/Advantages/ui/Advantages/Advantages"
import { Breadcrumbs } from "../../entities/BreadCrumbs/ui/BreadCrumbs"
import { SectionTitle } from "../../entities/SectionTitle/ui/SectionTitle"
import { Cart } from "../../widgets/Cart/ui/Cart/Cart";
import styles from "./CartPage.module.scss";

const CartPage = () => {
  return (
    <main className={styles.container}>
      <SectionTitle>
        <Breadcrumbs routes={routes}/>
      </SectionTitle>
      <Cart />
      <Advantages />
    </main>
  )
}

export default CartPage
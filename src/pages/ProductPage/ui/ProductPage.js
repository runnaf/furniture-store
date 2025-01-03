import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages";
import { ProductItem } from "../../../widgets/ProductItem/ui/ProductItem";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    return (
        <main className={styles.container}>
            <ProductItem />
            <Advantages />
        </main>
    )
}

export default ProductPage

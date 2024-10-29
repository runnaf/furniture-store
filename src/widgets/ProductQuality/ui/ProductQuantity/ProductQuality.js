import { ProductQuantityDescription } from "../ProductQuantityDescription/ProductQuantityDescription";
import { SliderProductQuantity } from "../SliderProductQuantity/SliderProductQuantity";
import styles from "./ProductQuality.module.scss";

export const ProductQuality = () => {
    return (
        <section className={styles.container}>
            <SliderProductQuantity />
            <ProductQuantityDescription />
        </section>
    )
}
import { DescriptionOfProduct } from "../DescriptionOfProduct/DescriptionOfProduct";
import { SliderOfProduct } from "../SliderOfProduct/SliderOfProduct";
import styles from "./ProductPreview.module.scss";

export const ProductPreview = ({data, color}) => {

    return (
        <section className={styles.container}>
          <SliderOfProduct data={data} currentColor={color} />
          <DescriptionOfProduct product = {data} />
        </section>
    )
}
import { DescriptionOfProduct } from "../DescriptionOfProduct/DescriptionOfProduct";
import { SliderOfProduct } from "../SliderOfProduct/SliderOfProduct";
import styles from "./ProductPreview.module.scss";

export const ProductPreview = ({data}) => {
    console.log(data)
    return (
        <section className={styles.container}>
            <SliderOfProduct data={data} />
            <DescriptionOfProduct product = {data} />
        </section>
    )
}
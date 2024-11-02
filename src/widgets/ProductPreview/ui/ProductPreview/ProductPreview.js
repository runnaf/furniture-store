import { DescriptionOfProduct } from "../DescriptionOfProduct/DescriptionOfProduct";
import {data} from "../../libs/data";
import styles from "./ProductPreview.module.scss";
import { SliderOfProduct } from "../SliderOfProduct/SliderOfProduct";

export const ProductPreview = () => {
    const {title} = data
    return (
        <section className={styles.container}>
            <SliderOfProduct product={title} />
            <DescriptionOfProduct product = {data} />
        </section>
    )
}
import styles from "./AboutUsPreview.module.scss";
import { data } from "../../libs/data";
import { DescriptionHistory } from "../DescriptionHistory/DescriptionHistory";
import { Picture } from "../Picture/Picture";
import { AboutUsInNumbers } from "../AboutUsInNumbers/AboutUsInNumbers";

export const AboutUsPreview = () => {
    return (
        <section className={styles.container}>
            <DescriptionHistory />
            <Picture />
            <AboutUsInNumbers array={data} />
        </section>
    )
}
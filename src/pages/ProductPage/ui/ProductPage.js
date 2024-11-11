import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { routes } from "../../../app/routes/lib/data";
import styles from "./ProductPage.module.scss";
import { ProductItem } from "../../../widgets/ProductItem/ui/ProductItem";

const ProductPage = () => {
    return (
        <main className={styles.container}>
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>
            <ProductItem />
        </main>
    )
}

export default ProductPage

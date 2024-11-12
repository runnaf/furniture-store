import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { routes } from "../../../app/routes/lib/data";
import { ProductItem } from "../../../widgets/ProductItem/ui/ProductItem";
import styles from "./ProductPage.module.scss";

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

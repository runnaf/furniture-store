import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { routes } from "../../../app/routes/lib/data";
import { ProductPreview } from "../../../widgets/ProductPreview/ui/ProductPreview/ProductPreview";
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages";
import { RelatedProducts } from "../../../widgets/RelatedProducts/RelatedProducts";
import { Tabs } from "../../../widgets/TabsProduct/ui/Tabs/Tabs";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    return (
        <main className={styles.container}>
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>
            <ProductPreview />
            <Tabs />
            <RelatedProducts />
            <Advantages />
        </main>
    )
}

export default ProductPage

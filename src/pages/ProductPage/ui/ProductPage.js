import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { routes } from "../../../app/routes/lib/data";
import styles from "./ProductPage.module.scss";
import { ProductPreview } from "../../../widgets/ProductPreview/ui/ProductPreview/ProductPreview";
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages";
import { RelatedProducts } from "../../../widgets/RelatedProducts/RelatedProducts";
import { Tabs } from "../../../widgets/TabsProduct/ui/Tabs/Tabs";

export const ProductPage = () => {
    return (
        <Stack direction="column" justify='justifyCenter' align='alignCenter' gap='75' className={styles.container}>
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>
            <ProductPreview />
            <Tabs />
            <RelatedProducts />
            <Advantages />
        </Stack>
    )
}

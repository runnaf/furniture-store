import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { routes } from "../../../app/routes/lib/data";
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages";
import { ProductQuality } from "../../../widgets/ProductQuality/ui/ProductQuantity/ProductQuality";
import { AboutUsPreview } from "../../../widgets/AboutUsPreview/ui/AboutUsPreview/AboutUsPreview";
import styles from "./AboutUsPage.module.scss";

export const AboutUsPage = () => {
    return (
        <main className={styles.container}>
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>
            <AboutUsPreview />
            <ProductQuality />
            <Advantages />
        </main>
    )
}

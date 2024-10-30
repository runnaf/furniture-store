import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { routes } from "../../../app/routes/lib/data";
import styles from "./AboutUsPage.module.scss";
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages";
import { ProductQuality } from "../../../widgets/ProductQuality/ui/ProductQuantity/ProductQuality";
import { AboutUsPreview } from "../../../widgets/AboutUsPreview/ui/AboutUsPreview/AboutUsPreview";

export const AboutUsPage = () => {
    return (
        <Stack direction="column" justify='justifyCenter' align='alignCenter' gap='75' className={styles.container}>
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>
            <AboutUsPreview />
            <ProductQuality />
            <Advantages />
        </Stack>
    )
}

import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { routes } from "../../../app/routes/lib/data";
import styles from "./ProductPage.module.scss";

export const ProductPage = () => {
    return (
        <Stack direction="column" justify='justifyCenter' align='alignCenter' gap='75' className={styles.container}>
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>
            
        </Stack>
    )
}
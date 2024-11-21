import { Stack } from "../../../shared/ui/Stack/Stack";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { routes } from "../../../app/routes/lib/data";
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages";
import { FAQ } from "../../../widgets/Questions/ui/FAQ/FAQ";
import styles from './FAQs.module.scss';

const FAQs = () => {

    return(
        <Stack 
            direction="column"
            justify='justifyCenter'
            align='alignCenter'
            className={styles.faqsContainer}
            gap='75'
        >
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>
            <FAQ/>
            <Advantages />
        </Stack>
    )
}

export default FAQs;

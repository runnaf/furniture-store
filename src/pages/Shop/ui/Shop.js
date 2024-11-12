import { routes } from "../../../app/routes/lib/data"
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs"
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle"
import { Stack } from "../../../shared/ui/Stack/Stack"
import styles from "./Shop.module.scss"
import { useResize } from "../../../shared/hooks/useResize"
import { FilterBar } from "../../../feature/Filter/ui/FilterBar/FilterBar"
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages"
import { OurProductsPage } from "../../../widgets/OurProducts/ui/OurProductsPage/OurProductsPage"

const Shop = () => {

    const width = useResize();
    const isMobile = width <= 820;
    
    return (
        <Stack 
            direction='column' 
            gap='75' 
            align='alignCenter'
            justify='justifyCenter'
            className={styles.container}
        >
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>

            <Stack 
                justify='justifyCenter' 
                align='alignCenter' 
                gap='75'
                className={styles.wrapper}
            >
                <Stack 
                    gap='32'
                >
                    {!isMobile && <FilterBar /> }                 
                    <OurProductsPage isMobile={isMobile}/>
                </Stack>
            </Stack>
            <Advantages />
        </Stack>
    )
}

export default Shop;
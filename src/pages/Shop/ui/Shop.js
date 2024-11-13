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
        <main 
            className={styles.container}
        >
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>

            <Stack 
                gap='32'
                className={styles.wrapper}
            >
                {!isMobile && <FilterBar /> }                 
                <OurProductsPage isMobile={isMobile}/>
            </Stack>
            <Advantages />
        </main>
    )
}

export default Shop;
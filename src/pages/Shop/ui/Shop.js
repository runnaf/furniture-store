import { routes } from "../../../app/routes/lib/data"
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs"
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { useResize } from "../../../shared/hooks/useResize"
import { FilterBar } from "../../../feature/Filter/ui/FilterBar/FilterBar"
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages"
import { OurProductsPage } from "../../../widgets/OurProducts/ui/OurProductsPage/OurProductsPage"
import styles from "./Shop.module.scss"
import Cookies from "js-cookie"

const Shop = () => {

    const width = useResize();
    const isMobile = width <= 820;

    const token = Cookies.get('authToken')
    console.log(token)

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
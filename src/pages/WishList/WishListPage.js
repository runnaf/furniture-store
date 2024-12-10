import { routes } from "../../app/routes/lib/data"
import { Advantages } from "../../entities/Advantages/ui/Advantages/Advantages"
import { Breadcrumbs } from "../../entities/BreadCrumbs/ui/BreadCrumbs"
import { SectionTitle } from "../../entities/SectionTitle/ui/SectionTitle"
import { Stack } from "../../shared/ui/Stack/Stack"
import { WishList } from "../../widgets/WishList/ui/Wishlist"
import styles from './WishlistPage.module.scss'

const WishlistPage = () => {
    return (
        <Stack direction='column' align='alignCenter' gap='75'>
            <SectionTitle>
                <Breadcrumbs routes={routes}/>                
            </SectionTitle>
            <Stack direction='column' className={styles.container}>
                <WishList/>
                <Advantages/>
            </Stack>
        </Stack>
    )
}

export default WishlistPage;
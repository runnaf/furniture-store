import { routes } from "../../app/routes/lib/data"
import { Advantages } from "../../entities/Advantages/ui/Advantages/Advantages"
import { Breadcrumbs } from "../../entities/BreadCrumbs/ui/BreadCrumbs"
import { SectionTitle } from "../../entities/SectionTitle/ui/SectionTitle"
import { WishList } from "../../widgets/WishList/ui/Wishlist"
import styles from './WishlistPage.module.scss'

const WishlistPage = () => {
    return (
        <main 
            className={styles.wishlist_page}
        >
            <SectionTitle>
                <Breadcrumbs routes={routes}/>                
            </SectionTitle>
            <WishList/>
            <Advantages/>
        </main>
    )
}

export default WishlistPage;
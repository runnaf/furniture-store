import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { routes } from "../../../app/routes/lib/data";
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages";
import { ProductQuality } from "../../../widgets/ProductQuality/ui/ProductQuantity/ProductQuality";
import { AboutUsPreview } from "../../../widgets/AboutUsPreview/ui/AboutUsPreview/AboutUsPreview";
import { Link } from "react-router-dom";
import { getRouteProduct } from "../../../app/routes/lib/helper";
import styles from "./AboutUsPage.module.scss";

const AboutUsPage = () => {
    return (
        <main className={styles.container}>
             {/* TODO */}
            <Link to={getRouteProduct('671a7363e7c54db428bcda25')}>к товару</Link>
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>
            <AboutUsPreview />
            <ProductQuality />
            <Advantages />
        </main>
    )
}

export default AboutUsPage

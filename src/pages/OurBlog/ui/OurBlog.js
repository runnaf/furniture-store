import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { routes } from "../../../app/routes/lib/data";
import { NewsBlogsPage } from "../../../widgets/NewsBlogs/ui/NewsBlogsPage/NewsBlogsPage";
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages";
import styles from "./OurBlog.module.scss";

const OurBlog = () => {

    return (
        <main
            className={styles.ourBlogContainer}
        >
            <SectionTitle>
                <Breadcrumbs routes={routes} />
            </SectionTitle>
            <NewsBlogsPage/>
            <Advantages />
        </main>
    )
}

export default OurBlog;
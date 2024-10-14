import { NewsLetter } from "../../../feature/NewsLetters/ui/NewsLetter";
import { FlashSale } from "../../../widgets/FlashSale/ui/FlashSale";
import { MobileNavbar } from "../../../widgets/Navbar/ui/MobileNavbar/MobileNavbar";
import { NewsBlogs } from "../../../widgets/NewsBlogs/ui/NewsBlogs";
import { OurProducts } from "../../../widgets/OurProducts/ui/OurProducts";
import { QuestionMainPage } from "../../../widgets/QuestionsMainPage/ui/QuestionMainPage";
import { TodayDeals } from "../../../widgets/TodayDeals/ui/TodayDeals";
import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <main className={styles.main_page}>
            <MobileNavbar />
            <OurProducts />
            <FlashSale />
            <TodayDeals />
            <NewsBlogs/>
            <QuestionMainPage />
            <NewsLetter />
        </main>
    );
};

export default MainPage;
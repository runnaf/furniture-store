import { NewsLetter } from "../../../feature/NewsLetters/ui/NewsLetter";
import { FlashSale } from "../../../widgets/FlashSale/ui/FlashSale";
import { NewsBlogsSection } from "../../../widgets/NewsBlogs/ui/NewsBlogsSection/NewsBlogsSection";
import { OurProducts } from "../../../widgets/OurProducts/ui/OurProducts";
import { QuestionMainPage } from "../../../widgets/QuestionsMainPage/ui/QuestionMainPage";
import { TodayDeals } from "../../../widgets/TodayDeals/ui/TodayDeals";
import styles from './MainPage.module.scss';
import { Testimonial } from "../../../widgets/Testimonial/ui/Testimonial/Testimonial";
import { Preview } from "../../../widgets/Preview/ui/Preview/Preview";
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages";


const MainPage = () => {
    return (
        <main className={styles.main_page}>
            <Preview />
            <Advantages />
            <OurProducts />
            <FlashSale />
            <TodayDeals />
            <Testimonial />
            <NewsBlogsSection/>
            <QuestionMainPage />
            <NewsLetter />
        </main>
    );
};

export default MainPage;
import { Header } from "../../../entities/Header/ui/Header";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { FlashSale } from "../../../widgets/FlashSale/ui/FlashSale";
import { Navbar } from "../../../widgets/Navbar/ui/Navbar";
import { NewsBlogs } from "../../../widgets/NewsBlogs/ui/NewsBlogs";
import { OurProducts } from "../../../widgets/OurProducts/ui/OurProducts";
import { QuestionMainPage } from "../../../widgets/QuestionsMainPage/ui/QuestionMainPage";
import { TodayDeals } from "../../../widgets/TodayDeals/ui/TodayDeals";

const MainPage = () => {
    return (
        <Stack direction="column"
            align='alignCenter'
            gap='125'>
            <Header/>
            <Navbar/>
            <OurProducts/>
            <FlashSale/>
            <TodayDeals/>
            <NewsBlogs/>
            <QuestionMainPage/>
        </Stack>
    )
}

export default MainPage;
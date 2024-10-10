import { Header } from "./entities/Header/ui/Header";
import { OurProducts } from "./widgets/OurProducts/ui/OurProducts";
import { Stack } from "./shared/ui/Stack/Stack";
import { FlashSale } from "./widgets/FlashSale/ui/FlashSale";
import { Navbar } from "./widgets/Navbar/ui/Navbar/Navbar";
import { QuestionMainPage } from "./widgets/QuestionsMainPage/ui/QuestionMainPage";
import { TodayDeals } from "./widgets/TodayDeals/ui/TodayDeals";
import { NewsBlogs } from "./widgets/NewsBlogs/ui/NewsBlogs";
import { MobileNavbar } from "./widgets/Navbar/ui/MobileNavbar/MobileNavbar";

function App() {
  return (
    <Stack direction="column"
      align='alignCenter'
      gap='125'>
      <Header />
      <Navbar />
      <MobileNavbar />
      <OurProducts />
      <FlashSale />
      <QuestionMainPage />
      <TodayDeals />
      <NewsBlogs/>
      <QuestionMainPage/>
    </Stack>
  );
}

export default App;

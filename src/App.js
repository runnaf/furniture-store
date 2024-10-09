import { Header } from "./entities/Header/ui/Header";
import { OurProducts } from "./widgets/OurProducts/ui/OurProducts";
import { Stack } from "./shared/ui/Stack/Stack";
import { FlashSale } from "./widgets/FlashSale/ui/FlashSale";
import { Navbar } from "./widgets/Navbar/ui/Navbar";
import { QuestionMainPage } from "./widgets/QuestionsMainPage/ui/QuestionMainPage";
import { TodayDeals } from "./widgets/TodayDeals/ui/TodayDeals";
import { NewsBlogs } from "./widgets/NewsBlogs/ui/NewsBlogs";
import { OurBlog } from "./pages/OurBlog/ui/OurBlog";

function App() {
  return (
    <Stack direction="column"
      align='alignCenter'
      gap='125'>
      <Header />
      <Navbar />
      <OurProducts />
      <FlashSale />
      <TodayDeals />
      <NewsBlogs/>
      <QuestionMainPage/>
      <OurBlog/>
    </Stack>
  );
}

export default App;

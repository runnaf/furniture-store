import { Header } from "./entities/Header/ui/Header";
import { OurProducts } from "./widgets/OurProducts/ui/OurProducts";
import { Stack } from "./shared/ui/Stack/Stack";
import { FlashSale } from "./widgets/FlashSale/ui/FlashSale";
import { Navbar } from "./widgets/Navbar/ui/Navbar";
import { QuestionMainPage } from "./widgets/QuestionsMainPage/ui/QuestionMainPage";
import { TodayDeals } from "./widgets/TodayDeals/ui/TodayDeals";
import { FilterBar } from "./widgets/FilterBar/ui/FilteBar";

function App() {
  return (
    <Stack direction="column"
      align='alignCenter'>
      <Header />
      <Navbar />
      <OurProducts />
      <FlashSale />
      <QuestionMainPage/>
      <TodayDeals />
      <FilterBar />
    </Stack>
  );
}

export default App;

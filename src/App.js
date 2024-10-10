import { Header } from "./entities/Header/ui/Header";
import { OurProducts } from "./widgets/OurProducts/ui/OurProducts";
import { Stack } from "./shared/ui/Stack/Stack";
import { FlashSale } from "./widgets/FlashSale/ui/FlashSale";
import { Navbar } from "./widgets/Navbar/ui/Navbar/Navbar";
import { QuestionMainPage } from "./widgets/QuestionsMainPage/ui/QuestionMainPage";
import { TodayDeals } from "./widgets/TodayDeals/ui/TodayDeals";
import { MobileNavbar } from "./widgets/Navbar/ui/MobileNavbar/MobileNavbar";

function App() {
  return (
    <Stack direction="column"
      align='alignCenter'>
      <Header />
      <Navbar />
      <MobileNavbar />
      <OurProducts />
      <FlashSale />
      <QuestionMainPage />
      <TodayDeals />
    </Stack>
  );
}

export default App;

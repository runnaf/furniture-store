import { Header } from "./entities/Header/ui/Header";
import { OurProducts } from "./entities/OurProducts/ui/OurProducts";
import { Stack } from "./shared/ui/Stack/Stack";
import { FlashSale } from "./widgets/FlashSale/ui/FlashSale";
import { Navbar } from "./widgets/Navbar/ui/Navbar";
import { QuestionMainPage } from "./widgets/QuestionsMainPage/ui/QuestionMainPage";


function App() {
  return (
    <Stack direction="column"
      align='alignCenter'>
      <Header />
      <Navbar />
      <OurProducts />
      <FlashSale />
      <QuestionMainPage/>
    </Stack>
  );
}

export default App;

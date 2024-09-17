import { Card } from "./entities/Card/ui/Card";
import { Header } from "./entities/Header/ui/Header";
import Timer from "./entities/timer/ui/Timer";
import { Stack } from "./shared/ui/Stack/Stack";
import FAQs from "./widgets/faq/ui/FAQs";
import { Navbar } from "./widgets/Navbar/ui/Navbar";
import QuestionMainPage from "./widgets/questionMainPage/ui/QuestionMainPage";

function App() {
  return (
    <Stack direction="column" gap='48'>
      <Header />
      <Navbar/>
      <Card id='1' promotion='50' category='Chair' name='Wooden sofa chair' price='160.00' newPrice='80.00' rating='4.9'/>
      <Timer styleMode='timerCardContainer' endTime={'2024-12-31T23:59:59.000Z'}/>
      <Timer styleMode='timerMainContainer' endTime={'2024-12-31T23:59:59.000Z'}/>
      <Timer styleMode='timerComingSoonContainer' endTime={'2024-12-31T23:59:59.000Z'}/>
      <FAQs/>
      <QuestionMainPage/>
    </Stack>
  );
}

export default App;

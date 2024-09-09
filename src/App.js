import { Card } from "./entities/Card/ui/Card";
import { Header } from "./entities/Header/ui/Header";
import Timer from "./entities/timer/ui/Timer";

function App() {
  return (
    <div className="App">
      <Header />
      <Card id='1' promotion='50' category='Chair' name='Wooden sofa chair' price='160.00' newPrice='80.00' rating='4.9'/>
      <Timer styleMode='timerCardContainer' endTime={'2024-12-31T23:59:59.000Z'}/>
      <Timer styleMode='timerMainContainer' endTime={'2024-12-31T23:59:59.000Z'}/>
      <Timer styleMode='timerComingSoonContainer' endTime={'2024-12-31T23:59:59.000Z'}/>
    </div>
  );
}

export default App;

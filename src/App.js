import { Header } from "./entities/Header/ui/Header";
import Timer from "./entities/timer/ui/Timer";

function App() {
  return (
    <div className="App">
      <Header />
      <Timer styleMode='timerCardContainer' endTime={'2024-12-31T23:59:59.000Z'}/>
      <Timer styleMode='timerMainContainer' endTime={'2024-12-31T23:59:59.000Z'}/>
      <Timer styleMode='timerComingSoonContainer' endTime={'2024-12-31T23:59:59.000Z'}/>
    </div>
  );
}

export default App;

import { Card } from "./entities/Card/ui/Card";
import { Header } from "./entities/Header/ui/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Card id='1' promotion='50' category='Chair' name='Wooden sofa chair' price='160.00' newPrice='80.00' rating='4.9'/>
    </div>
  );
}

export default App;

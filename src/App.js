import { Header } from "./entities/Header/ui/Header";
import HeaderSection from "./shared/ui/HeaderSection/HeaderSection";
import { Navbar } from "./widgets/Navbar/ui/Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar/>
      <HeaderSection 
        title='Our Products Collections' 
        subTitle='Our Products'
      />
    </>
  );
}

export default App;

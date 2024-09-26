import { Header } from "./entities/Header/ui/Header";
import { Stack } from "./shared/ui/Stack/Stack";
import { FlashSale } from "./widgets/FlashSale/ui/FlashSale";
import { Navbar } from "./widgets/Navbar/ui/Navbar";

function App() {
  return (
    <Stack direction="column"
    align='alignCenter'>
      <Header />
      <Navbar/>
      <FlashSale/>
    </Stack>
  );
}

export default App;

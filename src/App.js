import Router from "./app/routes/Router";
import { Header } from "./entities/Header/ui/Header";
import { Navbar } from "./widgets/Navbar/ui/Navbar/Navbar"
import styles from "./App.module.scss"


function App() {
  return(
  <main className={styles.main}>
    <Header/>
    <Navbar/>
    <Router/>
  </main>
  )
}

export default App;

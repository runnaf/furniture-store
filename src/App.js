import Router from "./app/routes/Router";
import { Header } from "./entities/Header/ui/Header";
import { Navbar } from "./widgets/Navbar/ui/Navbar/Navbar"
import styles from "./App.module.scss"
import { useLocation } from "react-router";


function App() {

  const locations = useLocation()

  const noHeaderNavbarFooter = ['/signin', '/signup']

  return(
  <main className={styles.main}>
    {!noHeaderNavbarFooter.includes(locations.pathname) && (
      <>
        <Header/>
        <Navbar/>
      </>
    )}
    <Router/>
  </main>
  )
}

export default App;

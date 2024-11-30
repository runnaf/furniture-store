import { routes } from "../../app/routes/lib/data";
import { Breadcrumbs } from "../../entities/BreadCrumbs/ui/BreadCrumbs";
import { SectionTitle } from "../../entities/SectionTitle/ui/SectionTitle";
import { Text } from "../../shared/ui/Text/Text";
import styles from "./ChecoutPage.module.scss";

const ChecoutPage = () => {
  return (
    <main className={styles.container}>
      <SectionTitle>
          <Breadcrumbs routes={routes}/>
      </SectionTitle>
      <Text type="h3">Страница находиться в разработке</Text>
    </main>
  )
}

export default ChecoutPage;

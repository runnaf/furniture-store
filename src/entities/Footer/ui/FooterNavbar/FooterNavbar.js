import Logo from "../../../../shared/assets/jpg/logo-footer.png"
import {data, elements, contacts} from "../../lib/data";
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom";
import { Text } from "../../../../shared/ui/Text/Text";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { FooterElement } from "../FooterElement/FooterElement";
import { useLocation } from "react-router";
import { getRouteMain } from "../../../../app/routes/lib/helper";
import styles from "./FooterNavbar.module.scss";

export const FooterNavbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === getRouteMain()

  return (
    <Stack className={styles.container} gap='48' >
      <Stack gap='48'>
        <Stack
          justify='justifyBetween' max
          direction='column'
          gap="24"
        >
        {
          isHomePage ? 
            <img src={Logo} with="223" height="56" alt="Логотип 'furnitore-store'" />
              : 
            <LinkCustom path='/' color = 'transparent' >
              <img src={Logo} with="223" height="56" alt="Логотип 'furnitore-store'" />
            </LinkCustom>
        }
                  
          <Text>{ data.content }</Text>
        </Stack>
        <FooterElement data={elements} contacts={contacts} />
      </Stack>
    </Stack>
  )
}
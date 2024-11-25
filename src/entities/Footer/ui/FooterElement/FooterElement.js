import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom";
import { Text } from "../../../../shared/ui/Text/Text";
import { Contact } from "../Contact/Contact";
import styles from "./FooterElement.module.scss";

export const FooterElement = ({data, contacts})=> {
  return (
    <ul className={styles.container}>
      {
        data.map((element, index) => (
          <li className={styles.wrapper} key={index}>
                <Text type='h3'>{ element.title }</Text>
                <ul className={styles.wrapper}>
                  {
                    element.links.map((link, index) => (
                      <li key={index}>
                        <LinkCustom path={link.path}>
                          {link.text}
                        </LinkCustom>
                      </li>
                    ))
                  }
                </ul>
          </li>
        ))
      }
      <Contact contacts={contacts} />      
    </ul>
  )
}
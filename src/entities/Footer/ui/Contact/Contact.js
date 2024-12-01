import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./Contact.module.scss";

export const Contact = ({ contacts }) => {
  const arrayContact = Object.entries(contacts);

  return (
    <li className={styles.container}>
      <Text type="h3">Контакты</Text>
      {arrayContact.map(([key, value]) => (
        <Text key={key}>{value}</Text>
      ))}
    </li>
  );
};

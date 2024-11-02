import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./AboutUsInNumbers.module.scss";

export const AboutUsInNumbers = ({array}) => {
    return (
        <ul className={styles.containerOfNumber}>
            {array.map((item) => (
                <li key={item.description}>
                    <Text size="xl">{item.number}</Text>
                    <Text>{item.description}</Text>
                </li>
            ))}
        </ul>
    )
}

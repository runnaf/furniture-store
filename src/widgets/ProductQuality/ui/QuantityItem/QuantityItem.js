import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./QuantityItems.module.scss";

export const QuantityItem = ({item}) => {
    return (
        <Stack className={styles.container} direction="column" gap="16">
            <img src={item.img} alt="Изображение отражающее качество" width="60" height="60"/>
            <Text size="s">{item.title}</Text>
            <Text>{item.text}</Text>
        </Stack>
    )
}

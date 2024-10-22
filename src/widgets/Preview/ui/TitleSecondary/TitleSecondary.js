import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./TitleSecondary.module.scss";

export const TitleSecondary = () => {
    return (
        <Stack className={styles.container}>
            <Text type = "h3">
                надежный интернет-магазин мебели
            </Text>
        </Stack>
        
    )
}

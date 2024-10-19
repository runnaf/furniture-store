import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import styles from './Advantage.module.scss'

export const Advantage = ({advantage}) => {
    console.log(advantage)
    return (
        <li className={styles.container}>
            <img src={advantage.image} alt={advantage.title} width={'60'} height={'60'} />
            <Stack direction="column" gap="8">
                <Text type="h3" size = "s">{advantage.title}</Text>
                <Text>{advantage.description}</Text>
            </Stack>
            
        </li>
    )
}

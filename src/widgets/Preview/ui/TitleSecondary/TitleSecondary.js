import { Stack } from '../../../../shared/ui/Stack/Stack'
import { Text } from '../../../../shared/ui/Text/Text'
import styles from './TitleSecondary.module.scss'

export const TitleSecondary = () => {
    return (
        <Stack className={styles.container}>
            <Text className={styles.title} type = {'h3'}>
                Лучший Интернет - магазин Мебели
            </Text>
        </Stack>
        
    )
}
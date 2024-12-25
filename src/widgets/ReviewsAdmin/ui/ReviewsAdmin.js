import { SearchAdmin } from "../../../feature/SearchAdmin/SearchAdmin"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { Text } from "../../../shared/ui/Text/Text"
import styles from './ReviewsAdmin.module.scss'

export const ReviewsAdmin = () => {
    return(
        <Stack
            direction='column'
            align='alignCenter'
            justify='justifyCenter'
            gap='32'
            max
        >
            <Stack
                align='alignCenter'
                justify='justifyCenter'
                max
                className={styles.reviewsAdmin}>
                <Text 
                    type="h2" 
                    size="md"
                >
                    Отзывы
                </Text>
            </Stack>
            <SearchAdmin
                placeholder={'Введите id товара'}
                button_name={'Поиск отзывов'}
            />
            {/* <Review/> */}
        </Stack>
    )
}
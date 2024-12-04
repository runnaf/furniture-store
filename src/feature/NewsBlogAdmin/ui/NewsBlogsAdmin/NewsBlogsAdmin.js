import { Stack } from "../../../../shared/ui/Stack/Stack"
import { Text } from "../../../../shared/ui/Text/Text"
import { NewsBlogsAdd } from "../NewsBlogsAdd/NewsBlogsAdd"
import styles from './NewsBlogsAdmin.module.scss'

export const NewsBlogsAdmin = () => {
    return(
        <Stack
            direction='column'
            align='alignCenter'
            justify='justifyCenter'
            max
            gap='32'
        >
            <Stack
                align='alignCenter'
                justify='justifyCenter'
                max
                className={styles.newsBlogsAdmin}>
                <Text 
                    type="h2" 
                    size="md"
                >
                    Новости и блог
                </Text>
            </Stack>
            <NewsBlogsAdd/>
        </Stack>
    )
}
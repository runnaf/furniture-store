import { Ellipsis } from "lucide-react"
import { Stack } from "../Stack/Stack"
import styles from './Waiting.module.scss'

export const Waiting = () => {
    return(
        <Stack>
            <Ellipsis className={styles.waiting}/>
        </Stack>
    )
}
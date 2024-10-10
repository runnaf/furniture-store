import { Link } from "react-router-dom";
import { Button } from "../../../shared/ui/Button/Button"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { Text } from "../../../shared/ui/Text/Text"
import styles from './CardBlogs.module.scss';

export const CardBlogs = ({ title, poster, description, date }) => {

    return(
        <Stack direction='column'
        gap='24'
        className={styles.cardBlogsContainer}>
            <Stack direction='column'
            justify='justifyCenter'
            align='alignCenter'>
                <img src={poster} alt="poster on the topic of news"/>
                <Stack>
                    <Text>
                        {date}
                    </Text>
                </Stack>
            </Stack>
            <Stack direction='column'
            gap='16'>
                <Text type="p" size="md">{title}</Text>
                <Text type='p'>{description}</Text>
                <Link>
                    <Button color='outlined'>{`Read More`}</Button>
                </Link>
            </Stack>
        </Stack>
    )
}
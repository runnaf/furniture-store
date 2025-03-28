import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";
import { LinkCustom } from "../../../shared/ui/LinkCustom/LinkCustom";
import { getRouteBlog } from "../../../app/routes/lib/helper";
import styles from './CardBlogs.module.scss';

export const CardBlogs = ({ title, poster, description, date }) => {
    return(
        <Stack 
            direction='column'
            gap='24'
            className={styles.cardBlogsContainer}
        >
            <Stack 
                direction='column'
                justify='justifyCenter'
                align='alignCenter'
            >
                <img src={poster.url} alt={poster.alt}/>
                <Text>{date}</Text>
            </Stack>

            <Stack 
                direction='column'
                gap='16'
            >
                <Text type="p" size="md">{title}</Text>
                <Text type='p'>{description}</Text>
                <LinkCustom to={getRouteBlog()} color='outlined'>
                    Подробнее
                </LinkCustom>
            </Stack>
        </Stack>
    );
};

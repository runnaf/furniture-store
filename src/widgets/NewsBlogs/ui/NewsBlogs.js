import { Link } from "react-router-dom";
import { CardBlogs } from "../../../entities/CardBlogs/ui/CardBlogs"
import { Button } from "../../../shared/ui/Button/Button"
import HeaderSection from "../../../shared/ui/HeaderSection/HeaderSection"
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './NewsBlogs.module.scss';
import { data } from '../lib/data';
import { getFormatDate } from "../../../shared/libs/getFormatDate";
import { useSortedNews } from "../../../shared/hooks/useSortedNews";
import { useMemo } from "react";
import { getRouteBlog } from "../../../app/routes/lib/helper";


export const NewsBlogs = () => {

    const sortedNews = useSortedNews(data)

    const currentNews = useMemo(() => sortedNews.slice(0, 3), [sortedNews])

    return(
        <Stack className={styles.newsBlogsContainer}
        direction='column'
        align='alignCenter'
        gap='50'>
            <Stack justify='justifyBetween'>
                <HeaderSection subTitle='Новости & Блог' 
                title='Наши последние' children=' Новости & Блог'/>
                <Link to={getRouteBlog()}>
                    <Button>{'Oткрыть блог'}</Button>
                </Link>
            </Stack>
            <Stack gap='32'>
                {currentNews.map(news => (
                    <CardBlogs key={news.id} title={news.title}
                    poster={news.poster}
                    description={news.description}
                    date={news.date}/>
                ))}
            </Stack>
        </Stack>
    )
}
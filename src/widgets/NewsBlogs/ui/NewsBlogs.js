import { Link } from "react-router-dom";
import { CardBlogs } from "../../../entities/CardBlogs/ui/CardBlogs"
import { Button } from "../../../shared/ui/Button/Button"
import HeaderSection from "../../../shared/ui/HeaderSection/HeaderSection"
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './NewsBlogs.module.scss';
import { data } from '../lib/data';
import { getFormatDate } from "../../../shared/libs/getFormatDate";
import { getRouteBlog } from "../../../app/routes/lib/helper";


export const NewsBlogs = () => {
    
    function getNews(news) {
        const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date))
        const formattedNews = sortedNews.map(item => ({
            ...item,
            date: getFormatDate(item.date)
        }));
        
        return formattedNews.slice(0, 3)
    }

    const currentNews = getNews(data)

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
                {currentNews.map((news, index) => (
                    <CardBlogs key={index} title={news.title}
                    poster={news.poster}
                    description={news.description}
                    date={news.date}/>
                ))}
            </Stack>
        </Stack>
    )
}
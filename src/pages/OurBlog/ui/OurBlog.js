import { CardBlogs } from "../../../entities/CardBlogs/ui/CardBlogs";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './OurBlog.module.scss'
import { data } from '../../../widgets/NewsBlogs/lib/data';
import { useState } from "react";
import arrow from '../../../shared/assets/svg/arrow-down.svg'
import { Button } from "../../../shared/ui/Button/Button";
import { getFormatDate } from "../../../shared/libs/getFormatDate";

export const OurBlog = () => {

    const articlesPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1)

    function sortNewsByDate(news) {
        return news.sort((a, b) => new Date(b.date) - new Date(a.date)).map(item => ({
            ...item,
            date: getFormatDate(item.date),
        }));
    }

    function getPaginatedNews(news) {
        const sortedNews = sortNewsByDate(news)
        const startIndex = (currentPage - 1) * articlesPerPage
        return sortedNews.slice(startIndex, startIndex + articlesPerPage)
    }

    const currentNews = getPaginatedNews(data)
    const totalPages = Math.ceil(data.length / articlesPerPage)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <Stack
        className={styles.ourBlogContainer}
        direction="column" 
        justify='justifyCenter' 
        align='alignCenter' 
        gap='75'>
            <SectionTitle>
                <h1>Our Blog</h1>
                <p>Home / Blog</p>
            </SectionTitle>
            <Stack direction='column'
            justify='justifyCenter' 
            align='alignCenter' gap='75'>
                <Stack justify='justifyCenter'
                align='alignCenter' gap='32'>
                    {currentNews.map((news, index) => (
                        <CardBlogs 
                            key={index} 
                            title={news.title}
                            poster={news.poster}
                            description={news.description}
                            date={news.date} 
                        />
                    ))}
                </Stack>
                <Stack gap='24' justify='justifyCenter'>
                    <Button color="outlined" onClick={handlePreviousPage} disabled={currentPage === 1}>
                        <img src={arrow} alt="previous page"/>
                    </Button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <Button key={index} 
                            color="outlined"
                            onClick={() => handlePageChange(index + 1)}
                            disabled={currentPage === index + 1}
                            className={currentPage === index + 1 ? styles.active : ''}>
                            {index + 1}
                            </Button>
                        ))}
                    <Button color="outlined" onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <img src={arrow} alt="next page"/>
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}
import { CardBlogs } from "../../../entities/CardBlogs/ui/CardBlogs";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './OurBlog.module.scss'
import { data } from '../../../widgets/NewsBlogs/lib/data';
import { useEffect, useMemo, useState } from "react";
import arrow from '../../../shared/assets/svg/arrow-down.svg'
import { Button } from "../../../shared/ui/Button/Button";
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { routes } from "../../../app/routes/lib/data";
import { useSortedNews } from "../../../shared/hooks/useSortedNews";

const ARTICLES_PER_PAGE = 9


export const OurBlog = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const sortedNews = useSortedNews(data)

    const totalPages = Math.ceil(sortedNews.length / ARTICLES_PER_PAGE)

    const currentNews = useMemo(() => {
        const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
        return sortedNews.slice(startIndex, startIndex + ARTICLES_PER_PAGE)
    }, [currentPage, sortedNews])

    useEffect(() => {
        window.scrollTo({ top: 100, behavior: 'smooth' })
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page)
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    };

    const paginationButtons = useMemo(() => {
        return Array.from({ length: totalPages }, (_, index) => (
            <Button 
                key={index} 
                color="outlined"
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
                className={currentPage === index + 1 ? styles.active : ''}>
                {index + 1}
            </Button>
        ));
    }, [currentPage, totalPages]);

    return (
        <Stack
            className={styles.ourBlogContainer}
            direction="column"
            justify='justifyCenter'
            align='alignCenter'
            gap='75'>
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>
            <Stack direction='column' justify='justifyCenter' align='alignCenter' gap='75'>
                <Stack justify='justifyCenter' align='alignCenter' gap='32'>
                    {currentNews.map(news => (
                        <CardBlogs 
                            key={news.id}
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
                    {paginationButtons}
                    <Button color="outlined" onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <img src={arrow} alt="next page"/>
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};
import { useState } from "react";
import { CardBlogs } from "../../../../entities/CardBlogs/ui/CardBlogs";
import { PaginationLib } from "../../../../entities/PaginationLib/PaginationLib";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { useGetAllNewsQuery } from "../../api/blogApi";
import styles from './NewsBlogsPage.module.scss'

const ARTICLES_PER_PAGE = 9;

export const NewsBlogsPage = () => {
    const [selectPage, setSelectPage] = useState(1);

    const handlePageChange = (e) => {
        setSelectPage(e.selected + 1);
    };

    const { data, error, isLoading } = useGetAllNewsQuery({
        limit: ARTICLES_PER_PAGE,
        page: selectPage,
    });

    if (isLoading) {
        return <Stack>Loading...</Stack> //TODO
    }

    if (error) {
        return <Stack>Error: {error.message}</Stack> //TODO
    }
    return(
        <Stack
            direction="column"
            align="alignCenter"
            gap="75"
            className={styles.ourBlog}
        >
            <Stack 
                align="alignCenter" 
                gap="32"
            >
                {data.blogs.map((news) => (
                <CardBlogs
                    key={news._id}
                    title={news.title}
                    poster={news.poster}
                    description={news.short_description}
                    date={news.date}
                />
                ))}
            </Stack>
            <PaginationLib
                onPageChange={handlePageChange}
                forcePage={selectPage - 1} 
                pageCount={data?.totalPages ?? 1} />
        </Stack>
    )
}


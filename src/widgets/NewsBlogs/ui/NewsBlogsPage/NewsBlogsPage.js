import { useState } from "react";
import ReactPaginate from "react-paginate";
import { CardBlogs } from "../../../../entities/CardBlogs/ui/CardBlogs";
import { ArrowPagination } from "../../../../shared/assets/svg/arrowPagination";
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
                    key={news.id}
                    title={news.title}
                    poster={news.poster}
                    description={news.short_description}
                    date={news.date}
                />
                ))}
            </Stack>
            <Stack 
                justify='center'
                align='center'
            >
                <ReactPaginate
                containerClassName={styles.paginationContainer}
                nextLabel={<ArrowPagination/>}
                previousLabel={<ArrowPagination/>}
                nextClassName={styles.next}
                previousClassName={styles.previous}
                activeClassName={styles.active}
                pageClassName={styles.page}
                disabledLinkClassName={styles.disabledLink}
                onPageChange={handlePageChange}
                forcePage={selectPage - 1} 
                pageCount={data?.totalPages ?? 1} 
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                breakLabel=". . ."
                breakClassName={styles.break}
                />
            </Stack>
        </Stack>
    )
}


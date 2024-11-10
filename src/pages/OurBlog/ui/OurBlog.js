import { CardBlogs } from "../../../entities/CardBlogs/ui/CardBlogs";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './OurBlog.module.scss'
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { routes } from "../../../app/routes/lib/data";
import { PaginationPage } from "../../../entities/PaginationPage/ui/PaginationPage";
import { useGetAllNewsQuery } from "../../../widgets/NewsBlogs/api/blogApi";
import { useState } from "react";

const ARTICLES_PER_PAGE = 9;

export const OurBlog = () => {

    const [selectPage, setSelectPage] = useState(1);

    const handlePageChange = (newPage) => {
        setSelectPage(newPage);
    };

    const { data, error, isLoading } = useGetAllNewsQuery({limit: ARTICLES_PER_PAGE, page: selectPage});


    if (isLoading) {
        return <Stack>Loading...</Stack> //TODO
    }

    if (error) {
        return <Stack>Error: {error.message}</Stack> //TODO
    }

    if (data) {
        return (
            <Stack
                className={styles.ourBlogContainer}
                direction="column"
                justify='justifyCenter'
                align='alignCenter'
                gap='75'
            >
                <SectionTitle>
                    <Breadcrumbs routes={routes}/>
                </SectionTitle>
                <Stack 
                    direction='column' 
                    ustify='justifyCenter' 
                    align='alignCenter' 
                    gap='75'
                    className={styles.ourBlog}
                >
                    <Stack 
                        justify='justifyCenter' 
                        align='alignCenter' 
                        gap='32'
                    >
                        {data.blogs.map(news => (
                            <CardBlogs 
                                key={news.id}
                                title={news.title}
                                poster={news.poster}
                                description={news.short_description}
                                date={news.date}
                            />
                        ))}
                    </Stack>
                    <PaginationPage 
                    onPageChange={handlePageChange}
                    totalPages={data.totalPages}
                    currentPage={data.currentPage}/>
                </Stack>
                <Advantages/>
            </Stack>
        );
    }

};
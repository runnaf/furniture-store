import { CardBlogs } from "../../../../entities/CardBlogs/ui/CardBlogs"
import { HeaderSection } from "../../../../shared/ui/HeaderSection/HeaderSection"
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { getRouteBlog } from "../../../../app/routes/lib/helper";
import { useCustomScroll } from "../../../../shared/hooks/useCustomScroll";
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom";
import { useResize } from "../../../../shared/hooks/useResize";
import { BottomButtons } from "../../../../entities/Slider/ui/BottomButtons/ui/BottomButtons/BottomButtons";
import { useSlider } from "../../../../entities/Slider/hooks/useSlider";
import { slicerOfArray } from "../../../../entities/Slider/lib/helper";
import { getStyles } from "../../../../shared/libs/getStyles";
import { useGetAllNewsQuery } from "../../api/blogApi";
import styles from './NewsBlogsSection.module.scss';

const ARTICLES_PER_PAGE = 3;
const QUANTITY_CARD_ON_PAGE = 1;
const PAGE = 1;

export const NewsBlogsSection = () => {

    const {data, isLoading, isError } = useGetAllNewsQuery({ limit: ARTICLES_PER_PAGE, page: PAGE})

    const containerRef = useCustomScroll();
    const width = useResize();

    const quantityCardsOnPage = () => {        
        if (width <= 590) {
            return QUANTITY_CARD_ON_PAGE
        } else return ARTICLES_PER_PAGE
    }


    const { currentSlide, handleClickSlide } = useSlider(data ? data.totalBlogs : 0);
    const blogs = slicerOfArray(data ? data.blogs : [], currentSlide, quantityCardsOnPage());
    
    const buttonClass = getStyles(
        width <= 590 ? styles.inBlock : styles.noneBlock,
        {},
        [styles.commonButtonClass]
    )


    if (isLoading) {
        return <Stack>Loading...</Stack> //TODO
    }

    if (isError) {
        return <Stack>Error: {isError.message}</Stack> //TODO
    }

        return(
            <Stack className={styles.newsBlogsContainer}>
                <Stack
                    className={styles.newsBlogs}
                    direction='column'
                    align='alignCenter'
                    gap='48'>
    
                    <Stack 
                        justify='justifyBetween'
                        className={styles.news_header} 
                        >
                        <HeaderSection subTitle='Новости & Блог'>
                            Наши последние <span>Новости & Блог</span> 
                        </HeaderSection>
                        <LinkCustom to={getRouteBlog()}>
                            Oткрыть блог
                        </LinkCustom>
                    </Stack>
                    <Stack 
                        className={styles.news_container}
                        direction='column'
                        align='alignCenter'
                    >
                        <Stack 
                            justify='justifyBetween' 
                            ref={containerRef}>
                            {blogs.map(news => (
                                <CardBlogs 
                                    key={news.id} 
                                    title={news.title}
                                    poster={news.poster}
                                    description={news.short_description}
                                    date={news.date}
                                />
                            ))}
                        </Stack>
                        <Stack className={buttonClass}>
                            <BottomButtons
                                color="secondary"
                                quantitySliders={data.blogs}
                                quantityCardsOnPage={quantityCardsOnPage()} 
                                currentSlide={currentSlide} 
                                handleClickSlide={handleClickSlide}/>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        )
    }



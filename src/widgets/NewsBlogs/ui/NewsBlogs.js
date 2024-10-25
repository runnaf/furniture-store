import { CardBlogs } from "../../../entities/CardBlogs/ui/CardBlogs"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './NewsBlogs.module.scss';
import { data, QUANTITY_CARD_ON_PAGE } from '../lib/data';
import { useSortedNews } from "../../../shared/hooks/useSortedNews";
import { useMemo } from "react";
import { getRouteBlog } from "../../../app/routes/lib/helper";
import { useCustomScroll } from "../../../shared/hooks/useCustomScroll";
import { LinkCustom } from "../../../shared/ui/LinkCustom/LinkCustom";
import { useResize } from "../../../shared/hooks/useResize";
import { BottomButtons } from "../../../entities/Slider/ui/BottomButtons/BottomButtons";
import { useSlider } from "../../../entities/Slider/hooks/useSlider";
import { slicerOfArray } from "../../../entities/Slider/lib/helper";
import { getStyles } from "../../../shared/libs/getStyles";


export const NewsBlogs = () => {

    const sortedNews = useSortedNews(data)
    const currentNews = useMemo(() => sortedNews.slice(0, 3), [sortedNews])
    const containerRef = useCustomScroll();
    const width = useResize();

    const quantityCardsOnPage = () => {        
        if (width <= 590) {
            return QUANTITY_CARD_ON_PAGE
        } else return 3
    }


    const { currentSlide, handleClickSlide } = useSlider(sortedNews.length);
    const news = slicerOfArray(currentNews, currentSlide, quantityCardsOnPage());

    const buttonClass = getStyles(
        width <= 590 ? styles.inBlock : styles.noneBlock,
        {},
        [styles.commonButtonClass]
    )

    return(
        <Stack 
            className={styles.newsBlogsContainer}>
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
                        {news.map(news => (
                            <CardBlogs 
                                key={news.id} 
                                title={news.title}
                                poster={news.poster}
                                description={news.description}
                                date={news.date}
                            />
                        ))}
                    </Stack>
                    <Stack className={buttonClass}>
                        <BottomButtons
                            quantitySliders={currentNews}
                            quantityCardsOnPage={QUANTITY_CARD_ON_PAGE} 
                            currentSlide={currentSlide} 
                            handleClickSlide={handleClickSlide}/>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
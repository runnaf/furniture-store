import { Stack } from "../../../shared/ui/Stack/Stack";
import cardData from '../../../shared/libs/cardData';
import { Card } from "../../../entities/Card/ui/Card/Card";
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection";
import { useSlider } from "../../../shared/hooks/useSlider";
import { useResize } from "../../../shared/hooks/useResize";
import { slicerOfArray } from "../../../entities/Slider/lib/helper";
import { BottomButtons } from "../../../entities/Slider/ui/BottomButtons/ui/BottomButtons/BottomButtons";
import { useCustomScroll } from "../../../shared/hooks/useCustomScroll";
import { LinkCustom } from "../../../shared/ui/LinkCustom/LinkCustom";
import { getRouteShop } from "../../../app/routes/lib/helper";
import { useGetAllProductsQuery } from "../../OurProducts/api/productApi";
import styles from './TodayDeals.module.scss';
import { CardInteraction } from "../../../feature/CartInteraction/ui/CardInteraction/CardInteraction";


const QUANTITY_CARD_ON_PAGE = 1;
const ARTICLE_PER_PAGE = 5;

export function TodayDeals () {

    const { data, error, isLoading } = useGetAllProductsQuery({
        limit: ARTICLE_PER_PAGE,
        page: 1,
        filters: {}
    });

    const { currentSlide, handleClickSlide } = useSlider(data ? data.products.lenght : 0);
    const width = useResize()
    const containerRef = useCustomScroll()
    
    const quantityCardsOnPage = () => {
        if (width <= 590) {
            return QUANTITY_CARD_ON_PAGE;
        } else return cardData.length;
    }

    const currentCards = slicerOfArray(data ? data.products : [], currentSlide, quantityCardsOnPage());

    return (
        <Stack 
            direction="column" 
            gap='48' 
            className={styles.mainContainer} 
            id="today-deals"
        >
            <Stack 
                justify='justifyBetween'
                align='alignCenter'
            >
                <HeaderSection subTitle='Выгодные предложения'>
                    <span>Выгодные </span>предложения дня
                </HeaderSection>
                <LinkCustom to={getRouteShop()}>
                    Посмотреть все
                </LinkCustom>
            </Stack>
            <Stack 
                gap='32'
                direction='column'
                align='alignStart'
                justify='justifyCenter'
            >
                <Stack 
                    gap='32'
                    align='alignCenter'
                    justify='justifyStart'
                    className={styles.cardContainer}
                    ref={containerRef}
                >
                    {currentCards.map((element) => (
                        <div key={element._id} >
                            <Card {...element} view="extended"/>
                            <CardInteraction {...element}/>
                        </div>
                    ))}
                </Stack>

                {width <= 590 && (
                    <BottomButtons
                        color='secondary'
                        quantitySliders={cardData}
                        quantityCardsOnPage={quantityCardsOnPage()} 
                        currentSlide={currentSlide} 
                        handleClickSlide={handleClickSlide}
                    />
                )}
            </Stack>
        </Stack>
    );
};
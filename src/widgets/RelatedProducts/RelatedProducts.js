import { HeaderSection } from "../../shared/ui/HeaderSection/HeaderSection"
import { Stack } from "../../shared/ui/Stack/Stack";
import { Card } from "../../entities/Card/ui/Card/Card";
import cardData, { QUANTITY_CARD_ON_PAGE } from '../../shared/libs/cardData';
import { useSlider } from "../../entities/Slider/hooks/useSlider";
import { slicerOfArray } from "../../entities/Slider/lib/helper";
import { useResize } from "../../shared/hooks/useResize";
import { useCustomScroll } from "../../shared/hooks/useCustomScroll";
import { BottomButtons } from "../../entities/Slider/ui/BottomButtons/ui/BottomButtons/BottomButtons";
import styles from "./RelatedProducts.module.scss";


export const RelatedProducts = () => {

    const width = useResize();
    const containerRef = useCustomScroll();

    const quantityCardsOnPage = (data) => {
        if (width <= 590) {
            return QUANTITY_CARD_ON_PAGE;
        } return data.length
    }

    const { currentSlide, handleClickSlide } = useSlider(cardData.length);
    // const currentCards = slicerOfArray(cardData, currentSlide, quantityCardsOnPage(cardData));
    

    return (
        <section className={styles.wrapper}>
            <HeaderSection subTitle= "Сопутствующие товары">
                Изучите <span>cопутствующие товары</span>
            </HeaderSection>
            <Stack 
                    className={styles.cardContainerWrapper}
                    direction='column'
                    justify='justifyCenter' 
                    align='alignCenter'
                    gap='24'
                >
                    <Stack 
                        gap='32' 
                        justify='justifyStart' 
                        align='alignCenter'
                        className={styles.cardContainer}
                        ref={containerRef}
                    >
                    {/* TODO */}
                    {/* {currentCards.map(element => (
                        <Card key={element.id} {...element} timer={false}/>
                    ))} */}
                    </Stack>
                    {width <= 590 && 
                    <BottomButtons
                        color='secondary'
                        quantitySliders={cardData}
                        quantityCardsOnPage={quantityCardsOnPage()} 
                        currentSlide={currentSlide} 
                        handleClickSlide={handleClickSlide}
                    />}
                </Stack>
        </section>
    )
}
import { Stack } from "../../../shared/ui/Stack/Stack";
import cardData from '../../../shared/libs/cardData';
import { Card } from "../../../entities/Card/ui/Card";
import styles from './TodayDeals.module.scss';
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection";
import { useSlider } from "../../../entities/Slider/hooks/useSlider";
import { useResize } from "../../../shared/hooks/useResize";
import { slicerOfArray } from "../../../entities/Slider/lib/helper";
import { Slider } from "../../../entities/Slider/ui/Slider/Slider";

export function TodayDeals () {
    const { currentSlide, nextCard, prevCard, handleClickSlide } = useSlider(cardData.length);
    const width = useResize();   

   
    const currentCards = slicerOfArray(cardData, currentSlide, '1');
    return (
        <Stack direction="column" gap='48' className={styles.mainContainer} id="today-deals">
            <HeaderSection subTitle='Выгодные предложения'>
                <span>Выгодные </span>предложения дня
            </HeaderSection>

            {width < 590 ? ( // Условный рендеринг
                    <Slider 
                        isSideButtons={false} 
                        isBottomButtons={true} 
                        quantityCardsOnPage='1'
                        className={styles.slider} 
                        data={cardData} 
                        currentSlide={currentSlide} 
                        nextCard={nextCard} 
                        prevCard={prevCard}
                        handleClickSlide={handleClickSlide}
                        gap="32"
                    >
                        <Stack justify='justifyCenter'>
                        {currentCards.map((element) => (
                            <div key={element.id}>
                                <Card {...element} view="extended" />
                            </div>
                        ))}
                        </Stack>
                    </Slider>
                ) : (
                    <Stack 
                        justify='justifyBetween' 
                        className={styles.container}
                    >
                        {cardData.map(element => (
                            <div className={styles.cardWrapper} key={element.id}>
                                <Stack className={styles.cardContainer}>
                                    <Card {...element} view="extended" />
                                </Stack>
                            </div>
                        ))}
                    </Stack>
                )}
        </Stack>
    );
};
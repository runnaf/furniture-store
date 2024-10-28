import { Stack } from '../../../shared/ui/Stack/Stack';
import { Button } from '../../../shared/ui/Button/Button';
import { Card } from '../../../entities/Card/ui/Card';
import cardData from '../../../shared/libs/cardData';
import { HeaderSection } from '../../../shared/ui/HeaderSection/HeaderSection';
import styles from './OurProducts.module.scss';
import { buttons } from '../lib/data';
import { useState } from 'react';
import { useSlider } from "../../../entities/Slider/hooks/useSlider";
import { useResize } from "../../../shared/hooks/useResize";
import { slicerOfArray } from "../../../entities/Slider/lib/helper";
import { Slider } from "../../../entities/Slider/ui/Slider/Slider";

export function OurProducts() {

    const [selectedFilter, setSelectedFilter] = useState(null);
    const { currentSlide, nextCard, prevCard, handleClickSlide } = useSlider(cardData.length);
    const width = useResize();   

    const quantityCardsOnPage = () => {
        if (width <= 485) {
            return 1; 
        } else {
            return 2;
        }
    };

    const currentCards = slicerOfArray(cardData, currentSlide, quantityCardsOnPage());

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <Stack className={styles.parenContainer}>
            <Stack direction='column' align='alignCenter' gap='16' className={styles.container}>
                <HeaderSection subTitle='Наша продукция'>
                    <span>Каталог товаров</span>
                </HeaderSection>

                <Stack gap='16' className={styles.buttonsContainer}>
                    {buttons.map(({ label, filter }) => (
                        <Button 
                            key={filter} 
                            color={selectedFilter === filter ? 'primary' : 'outlined'} 
                            onClick={() => handleFilterChange(filter)}
                        >
                            {label}
                        </Button>
                    ))}
                </Stack>

                <div className={styles.cardContainerWrapper}>
                    {width <= 590 ? ( 
                        <Slider 
                            isSideButtons={false} 
                            isBottomButtons={true} 
                            quantityCardsOnPage={quantityCardsOnPage()}
                            className={styles.slider} 
                            data={cardData} 
                            currentSlide={currentSlide} 
                            nextCard={nextCard} 
                            prevCard={prevCard}
                            handleClickSlide={handleClickSlide}
                            gap="25"
                        >
                            <Stack gap='8' justify='justifyCenter'>
                            {currentCards.map((element) => (
                                <div className={styles.cardWrapper} key={element.id}>
                                    <Card {...element} />
                                </div>
                            ))}
                            </Stack>
                        </Slider>
                    ) : (
                        <Stack 
                            justify='justifyBetween'
                            className={styles.cardContainer}
                            gap='75'
                        >
                            {cardData.map((element) => (
                                <div className={styles.cardWrapper} key={element.id}>
                                    <Card {...element} />
                                </div>
                            ))}
                        </Stack>
                    )}
                </div>
            </Stack>
        </Stack>
    );
}


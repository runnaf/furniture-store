import { Stack } from '../../../shared/ui/Stack/Stack';
import { Button } from '../../../shared/ui/Button/Button';
import { Card } from '../../../entities/Card/ui/Card';
import cardData, { QUANTITY_CARD_ON_PAGE } from '../../../shared/libs/cardData';
import { HeaderSection } from '../../../shared/ui/HeaderSection/HeaderSection';
import styles from './OurProducts.module.scss';
import { buttons } from '../lib/data';
import { useState } from 'react';
import { useSlider } from "../../../entities/Slider/hooks/useSlider";
import { useResize } from "../../../shared/hooks/useResize";
import { slicerOfArray } from "../../../entities/Slider/lib/helper";
import { useCustomScroll } from '../../../shared/hooks/useCustomScroll';
import { BottomButtons } from '../../../entities/Slider/ui/BottomButtons/ui/BottomButtons/BottomButtons';

export function OurProducts() {

    const [selectedFilter, setSelectedFilter] = useState('all');
    const containerRef = useCustomScroll();
    const width = useResize();   


    const quantityCardsOnPage = () => {
        if (width <= 590) {
            return QUANTITY_CARD_ON_PAGE;
        } else return 4;
    }

    const { currentSlide, handleClickSlide } = useSlider(cardData.length);
    const currentCards = slicerOfArray(cardData, currentSlide, quantityCardsOnPage());

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <Stack 
            direction='column' 
            align='alignCenter' 
            gap='32' 
            className={styles.container}
        >
            <Stack 
                className={styles.productContainer}
                direction='column'
                align='alignCenter'
                gap='48'
            >
                <Stack  
                    direction='column'
                    align='alignCenter'
                    gap='32'
                >
                    <HeaderSection subTitle='Наша продукция'>
                        <span>Каталог товаров</span>
                    </HeaderSection>

                    <Stack 
                        align='alignCenter'
                        justify='justifyCenter'
                        gap='16' 
                        className={styles.filterButtons}
                    >
                        {buttons.map(item => (
                            <Button 
                                key={item.id} 
                                color={selectedFilter === item.filter ? 'primary' : 'outlined'} 
                                onClick={() => handleFilterChange(item.filter)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Stack>
                </Stack>

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
                    {currentCards.map(element => (
                        <Card key={element.id} {...element} />
                    ))}
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
            </Stack>
        </Stack>
    );
}


import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Button } from '../../../../shared/ui/Button/Button';
import { Card } from '../../../../entities/Card/ui/Card/Card';
import { HeaderSection } from '../../../../shared/ui/HeaderSection/HeaderSection';
import { buttons, cards } from '../../lib/data';
import { useState } from 'react';
import { useSlider } from "../../../../entities/Slider/hooks/useSlider";
import { useResize } from "../../../../shared/hooks/useResize";
import { slicerOfArray } from "../../../../entities/Slider/lib/helper";
import { useCustomScroll } from '../../../../shared/hooks/useCustomScroll';
import { BottomButtons } from '../../../../entities/Slider/ui/BottomButtons/ui/BottomButtons/BottomButtons';
import { useGetAllProductsQuery } from '../../api/productApi';
import styles from './OurProducts.module.scss';


const QUANTITY_CARD_ON_PAGE = 1;
const ARTICLE_PER_PAGE = 5;

export function OurProducts() {

    const { data, error, isLoading } = useGetAllProductsQuery({
        limit: ARTICLE_PER_PAGE,
        page: 1,
        filters:{}
    });

    const [selectedFilter, setSelectedFilter] = useState('all');
    const containerRef = useCustomScroll();
    const width = useResize();   


    const quantityCardsOnPage = () => {
        if (width <= 590) {
            return QUANTITY_CARD_ON_PAGE;
        } else return ARTICLE_PER_PAGE;
    }

    const { currentSlide, handleClickSlide } = useSlider(data ? data.products.lenght : 0);
    const currentCards = slicerOfArray(data ? data.products : [], currentSlide, quantityCardsOnPage());

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
                    {currentCards.map(product => (
                        <Card 
                            key={product._id} 
                            id={product._id}  
                            color={product.color} 
                            rating={product.rating}
                            promotion={product.promotion} 
                            sub_categories={product.sub_categories} 
                            name={product.name}
                            price={product.price} 
                            sale_price={product.sale_price} 
                            timer={product.timer}
                            short_description={product.short_description}
                            availability={product.availability}
                        />
                    ))}
                    </Stack>
                    {width <= 590 && 
                    <BottomButtons
                        color='secondary'
                        quantitySliders={cards}
                        quantityCardsOnPage={quantityCardsOnPage()} 
                        currentSlide={currentSlide} 
                        handleClickSlide={handleClickSlide}
                    />}
                </Stack>
            </Stack>
        </Stack>
    )
}


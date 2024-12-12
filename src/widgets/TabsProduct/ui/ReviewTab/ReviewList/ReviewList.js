import React from 'react';
import { Stack } from '../../../../../shared/ui/Stack/Stack';
import { Review } from '../../../../../entities/Review/Review';
import { Text } from '../../../../../shared/ui/Text/Text';
import { monthsAgo } from '../../../lib/helpers';
import { slicerOfArray } from '../../../../../entities/Slider/lib/helper';
import { QUANTITY_REVIEWS_ON_PAGE } from '../../../lib/data';
import { Pagination } from '../../../../../entities/Pagination/Pagination';
import { useSlider } from '../../../../../shared/hooks/useSlider';
import { Slider } from '../../../../../entities/Slider/ui/Slider/Slider';
import { CustomSelect } from '../../../../../shared/ui/CustomSelect/CustomSelect';
import { getValueOption } from '../../../../../shared/libs/getValueOption';
import styles from './ReviewList.module.scss';

export const ReviewList = ({ reviews }) => {
    const {currentSlide, nextCard,  prevCard, handleClickSlide} = useSlider(reviews.length)
    const reviewsOnPage = slicerOfArray(reviews, currentSlide, QUANTITY_REVIEWS_ON_PAGE);
    const firstPage = (currentSlide) => {
        if (currentSlide === 0) {
            return 1
        } else return QUANTITY_REVIEWS_ON_PAGE*currentSlide + 1
    }
    
    const firstReviews = firstPage(currentSlide);
    const lastReviews = () => {
        if (firstPage(currentSlide) + QUANTITY_REVIEWS_ON_PAGE - 1 < reviews.length) {
            return firstPage(currentSlide) + QUANTITY_REVIEWS_ON_PAGE - 1;
        } else return reviews.length
    }

    const options = ['newest', 'oldest', 'highest', 'lowest'];

    // const handleSelectChange = (selected) => {
    //     console.log('Selected:', selected);
    // }; для проверки что выбирает пользователь

    return (
        <Stack justify='column' gap="24">
            <Text type='h3' size="md">Отзывы</Text>
            <Stack className={styles.wrapper} align="alignCenter" justify="justifyBetween">
                <Text>{`Показаны ${firstReviews} - ${lastReviews()} из ${reviews.length} результатов`}</Text>
                <CustomSelect options={options} 
                                label="Сортировать по" 
                                // onChange={handleSelectChange}
                                getValueOption={getValueOption} 
                />
            </Stack>
            <Slider 
                    isSideButtons={false} 
                    isBottomButtons={false} 
                    quantityCardsOnPage={QUANTITY_REVIEWS_ON_PAGE } 
                    className={styles.slider} 
                    data={reviews} 
                    currentSlide={currentSlide} 
                    nextCard={ nextCard } 
                    prevCard={ prevCard }
                    gap="16"
                >
                    {reviewsOnPage.map((review, id) => (
                        <Review className={styles.review} key={id} data={review}>
                            <Text>{monthsAgo(review.date)}</Text>
                        </Review>
                ))}
                    {
                        reviews.length > QUANTITY_REVIEWS_ON_PAGE && (
                            <Pagination 
                                array={reviews} 
                                quantityPages = {QUANTITY_REVIEWS_ON_PAGE} 
                                currentSlide={currentSlide} 
                                nextCard={ nextCard } 
                                prevCard={ prevCard } 
                                handleClickSlide = { handleClickSlide }
                            />
                        )
                    }
                </Slider>
        </Stack>
    )
}


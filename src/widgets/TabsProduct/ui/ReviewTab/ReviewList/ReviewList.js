import React from 'react';
import styles from './ReviewList.module.scss';
import { Stack } from '../../../../../shared/ui/Stack/Stack';
import { Review } from '../../../../Testimonial/ui/Review/Review';
import { Text } from '../../../../../shared/ui/Text/Text';
import { monthsAgo } from '../../../lib/helpers';
import { slicerOfArray } from '../../../../../entities/Slider/lib/helper';
import { QUANTITY_REVIEWS_ON_PAGE } from '../../../lib/data';
import { Pagination } from '../../../../../entities/Pagination/Pagination';
import { useSlider } from '../../../../../entities/Slider/hooks/useSlider';
import { Slider } from '../../../../../entities/Slider/ui/Slider/Slider';

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

    return (
        <Stack justify='column' gap="24">
            <Text type='h3' size="md">Отзывы</Text>
            <Stack className={styles.wrapper} align="alignCenter" justify="justifyBetween">
                <Text>{`Показаны ${firstReviews} - ${lastReviews()} из ${reviews.length} результатов`}</Text>

                <Stack align="alignCenter" gap="16">
                    <span>Сортировать по</span>
                    <select>
                        <option value="newest">от новых</option>
                        <option value="oldest">от старых</option>
                        <option value="highest">от высокого рейтинга</option>
                        <option value="lowest">от низкого рейтинга</option>
                    </select>
                </Stack>
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
                    {reviewsOnPage.map((review) => (
                        <Review className={styles.review} key={review.id} review={review}>
                            <Text>{monthsAgo(review.date)}</Text>
                        </Review>
                ))}
                    <Pagination 
                        array={reviews} 
                        quantityPages = {QUANTITY_REVIEWS_ON_PAGE} 
                        currentSlide={currentSlide} 
                        nextCard={ nextCard } 
                        prevCard={ prevCard } 
                        handleClickSlide = { handleClickSlide }
                    />
                </Slider>
        </Stack>
    )
}


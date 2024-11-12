import React from 'react';
import { ReviewSummary } from '../ReviewSummary/ReviewSummary';
import { ReviewList } from '../ReviewList/ReviewList';
import { reviews } from '../../../lib/data';
import { Stack } from '../../../../../shared/ui/Stack/Stack';
import { calculateAverageStars, countStars } from '../../../lib/helpers';
import { SendingReview } from '../../../../../feature/SendingReview/SendingReview';
import { Text } from '../../../../../shared/ui/Text/Text';
import { useParams } from 'react-router';
import { useGetReviewsByProductIdQuery } from '../../../../ProductItem/api/ProductApi';
import styles from './ReviewTab.module.scss';

export const ReviewTab = () => {
    const { id } = useParams();
    
    const authorized = true; //TODO
    const madePurchase = true //TODO

    const {data, isLoading} = useGetReviewsByProductIdQuery(id);
    
    if(isLoading) return //TODO

    const rating = countStars(data);
    const average = calculateAverageStars(rating).toFixed(1);

    return (
        <Stack gap="48" direction="column">
            <ReviewSummary
                ratingScore={average}
                totalReviews={data.length}
                rating={rating}
            />
            <ReviewList reviews={data} />
            <Stack direction="column" gap="24">
                <Stack direction="column" gap="16">
                    <Text type="h3" size="md">Оставьте свой отзыв</Text>
                    <Text className={styles.text}>Ваш адрес электронной почты не будет опубликован. Обязательные поля отмечены <sup>*</sup></Text>
                </Stack>
                {authorized && madePurchase && <SendingReview />}
                
            </Stack>
        </Stack>
    )
};

import React from 'react';
import { ReviewSummary } from '../ReviewSummary/ReviewSummary';
import { ReviewList } from '../ReviewList/ReviewList';
import { reviews } from '../../../lib/data';
import { Stack } from '../../../../../shared/ui/Stack/Stack';
import { calculateAverageStars, countStars } from '../../../lib/helpers';
import { SendingReview } from '../../../../../feature/SendingReview/SendingReview';
import { Text } from '../../../../../shared/ui/Text/Text';
import styles from './ReviewTab.module.scss';

export const ReviewTab = () => {
    const rating = countStars(reviews);
    const average = calculateAverageStars(rating).toFixed(1);
    const authorized = true; //TODO
    const madePurchase = true //TODO

    return (
        <Stack gap="48" direction="column">
            <ReviewSummary
                ratingScore={average}
                totalReviews={reviews.length}
                rating={rating}
            />
            <ReviewList reviews={reviews} />
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

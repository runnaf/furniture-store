import React from 'react';
import { ReviewSummary } from '../ReviewSummary/ReviewSummary';
import { ReviewList } from '../ReviewList/ReviewList';
import { reviews } from '../../../lib/data';
import { Stack } from '../../../../../shared/ui/Stack/Stack';
import { calculateAverageStars, countStars } from '../../../lib/helpers';

export const ReviewTab = () => {
    const rating = countStars(reviews);
    const average = calculateAverageStars(rating).toFixed(1);

    return (
        <Stack gap="48" direction="column">
            <ReviewSummary
                ratingScore={average}
                totalReviews={reviews.length}
                rating={rating}
            />
            <ReviewList reviews={reviews} />
        </Stack>
    )
};

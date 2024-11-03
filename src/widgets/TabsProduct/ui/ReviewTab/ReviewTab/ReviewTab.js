import React from 'react';
import { ReviewSummary } from '../ReviewSummary/ReviewSummary';
import { ReviewList } from '../ReviewList/ReviewList';
import { reviewData } from '../../../lib/data';

export const ReviewTab = () => (
    <div>
        <ReviewSummary
            ratingScore={reviewData.ratingScore}
            totalReviews={reviewData.totalReviews}
            ratingBreakdown={reviewData.ratingBreakdown}
        />
        <ReviewList reviews={reviewData.reviews} />
    </div>
);

import React from 'react';
import styles from './ReviewList.module.scss';
import { Stack } from '../../../../../shared/ui/Stack/Stack';

export const ReviewList = ({ reviews }) => (
    <Stack justify='column' className={styles.reviewList}>
        <h3>Review List</h3>
        <p>Showing 1-{reviews.length} of {reviews.length} results</p>
        <div className={styles.sortSection}>
            <span>Sort by:</span>
            <select className={styles.sortSelect}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
            </select>
        </div>
        {reviews.map((review, index) => (
            <div key={index} className={styles.reviewItem}>
                <div className={styles.userSection}>
                    <div className={styles.avatar}></div>
                    <div>
                        <p className={styles.userName}>{review.userName} {review.verified && <span className={styles.verified}>(Verified)</span>}</p>
                        <p className={styles.date}>{review.date}</p>
                    </div>
                </div>
                <div className={styles.reviewContent}>
                    <h4 className={styles.reviewTitle}>{review.title}</h4>
                    <p className={styles.reviewText}>{review.text}</p>
                    <div className={styles.rating}>
                        {'★'.repeat(Math.round(review.rating))}
                        <span className={styles.ratingValue}>{review.rating}</span>
                    </div>
                    {review.media && review.media.length > 0 && (
                        <div className={styles.mediaGallery}>
                            {review.media.map((mediaItem, idx) => (
                                <img key={idx} src={mediaItem} alt={`Media ${idx + 1}`} className={styles.mediaItem} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        ))}
    </Stack>
);

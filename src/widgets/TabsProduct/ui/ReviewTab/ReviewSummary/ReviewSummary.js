import { Stack } from '../../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../../shared/ui/Text/Text';
import styles from './ReviewSummary.module.scss';

export const ReviewSummary = ({ ratingScore, totalReviews, ratingBreakdown }) => (
    <Stack className={styles.reviewSummary}>
        <Stack className={styles.ratingScoreSection}>
            <Stack className={styles.ratingScore}>{ratingScore}</Stack>
            <Text className={styles.ratingOutOf}>out of 5</Text>
            <Stack className={styles.starRating}>
                {'★'.repeat(Math.round(ratingScore))}
            </Stack>
            <Text className={styles.totalReviews}>({totalReviews} Reviews)</Text>
        </Stack>
        <Stack className={styles.ratingBreakdown}>
            {ratingBreakdown.map((item, index) => (
                <Stack key={index} className={styles.breakdownRow}>
                    <span className={styles.starLabel}>{item.stars} Star</span>
                    <Stack className={styles.progressBar}>
                        <Stack
                            className={styles.filledBar}
                            style={{ width: `${(item.count / totalReviews) * 100}%` }}
                        ></Stack>
                    </Stack>
                </Stack>
            ))}
        </Stack>
    </Stack>
);

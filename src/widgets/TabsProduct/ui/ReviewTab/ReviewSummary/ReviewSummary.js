import { Stars } from '../../../../../entities/Stars/ui/Stars/Stars';
import { Stack } from '../../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../../shared/ui/Text/Text';
import { getStarsWord } from '../../../lib/helpers';
import styles from './ReviewSummary.module.scss';

export const ReviewSummary = ({ ratingScore, totalReviews, rating }) => (
    <Stack className={styles.reviewSummary} justify="justifyBetween" align="alignCenter" gap="75">
        <Stack className={styles.ratingScoreSection} direction="column" align="alignCenter" gap="8" justify="justifyCenter">
            <Stack align="alignEnd">
                <Text align="alignCenter" direction="column" size="xxl">{ratingScore}</Text>
                <Text>&nbsp;из 5</Text>
            </Stack>
            <Stars rating={ratingScore} ratingText={false}></Stars>
            <Text className={styles.totalReviews}>({totalReviews} отзывов)</Text>
        </Stack>
        <Stack className={styles.ratingBreakdown} direction="column" gap="16">
            {Object.entries(rating).map(([stars, count]) => (
                        <Stack key={stars} className={styles.breakdownRow} justify="justifyCenter" align="alignCenter" gap="16">
                        <span>{getStarsWord(stars)}</span>
                        <Stack>
                            <Stack
                                style={{ width: `${(count / totalReviews) * 100}%` }}
                            ></Stack>
                        </Stack>
                    </Stack>
                    ))}
        </Stack>
    </Stack>
);

import { starIcon } from "../../../../shared/assets/svg/starIcon";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from "./Review.module.scss";

const WHOLE_RATING = 5

export const Review = ({review}) => {
    return (
        <Text type="li" className={styles.reviewItem}>
            <Stack className={styles.reviewUserContainer} gap="8" align="alignCenter">
                <Stack className={styles.reviewImageContainer} align="alignCenter" justify="justifyCenter">
                    <img alt={review.name} width="135" height="135"/>
                </Stack>
                <Stack className={styles.wrapper} direction = "column" justify = "justifyCenter" gap="16">
                    <Text size="s">{review.name}</Text>
                    <Text>{review.speciality}</Text>
                    <Stack gap = "8">                         
                        <ul>
                            {Array.from({length: WHOLE_RATING}, (_, i) => i).map(rating =>
                                <Text type="li" key={rating} id={rating} className={rating + 1 <= Math.round(review.rating) ? styles.ratingCurrent : styles.starDisable}>
                                    {starIcon()}
                                </Text>
                            )}
                        </ul>
                        <VisuallyHidden>`{Math.round(review.rating)} звeзд из 5`</VisuallyHidden>
                        <span className={styles.ratingTitle}>{review.rating.toFixed(1)}</span>
                    </Stack>
                </Stack>
            </Stack>
            <Stack className={styles.review}>
                {review.review}
            </Stack>
        </Text>
    )
}

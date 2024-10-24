import { quotesIcon } from "../../../../shared/assets/svg/quotesIcon";
import { starIcon } from "../../../../shared/assets/svg/starIcon";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from "./Review.module.scss";

const WHOLE_RATING = 5

export const Review = ({ review }) => {

    const getStyles = (rating) => {
        return rating + 1 <= Math.round(review.rating) ? styles.ratingCurrent : styles.starDisable; //TODO
    };

    return (
        <Stack 
            className={styles.reviewItem} 
            direction="column" gap="16"
        >
            <Stack 
                gap="16" align="alignCenter" 
                className={styles.wrapper}
            >
                {/* <Stack 
                    className={styles.reviewImageContainer} 
                    align="alignCenter" 
                    justify="justifyCenter" 
                /> */}
                <Stack 
                    direction="column" 
                    justify="justifyCenter" gap="16"
                >
                    <Text >
                        {review.name}
                    </Text>
                    <Text>
                        {review.speciality}
                    </Text>
                    <Stack gap="8">                         
                        {Array.from({length: WHOLE_RATING}, (_, i) => i).map(rating =>
                            <Stack 
                                key={rating} 
                                className={getStyles(rating)}
                            >
                                {starIcon()}
                            </Stack>
                        )}
                        <VisuallyHidden>`{Math.round(review.rating)} звeзд из 5`</VisuallyHidden>
                        <span className={styles.ratingTitle}>{review.rating.toFixed(1)}</span>
                    </Stack>
                </Stack>
                <Stack className={styles.quotesIcon} justify="justifyEnd">
                    {quotesIcon()}
                </Stack>
            </Stack>
            <Text className={styles.review}>
                {review.review}
            </Text>
        </Stack>
    )
}

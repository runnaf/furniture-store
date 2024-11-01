import { Stars } from "../../../../entities/Stars/Stars";
import { quotesIcon } from "../../../../shared/assets/svg/quotesIcon";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./Review.module.scss";

export const Review = ({ review }) => {
    return (
        <Stack 
            className={styles.reviewItem} 
            direction="column" gap="16"
        >
            <Stack 
                gap="16" align="alignCenter" 
                className={styles.wrapper}
            >
                <Stack 
                    direction="column" 
                    justify="justifyCenter" gap="16"
                >
                    <Text className={styles.text_name}>
                        {review.name}
                    </Text>
                    <Text className={styles.text_speciality}>
                        {review.speciality}
                    </Text>
                    <Stars rating={review.rating} />
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

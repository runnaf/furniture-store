import { Stars } from "../../../../entities/Stars/ui/Stars/Stars";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./Review.module.scss";

export const Review = ({ review, children, className }) => {
    return (
        <Stack 
            className={className} 
            direction="column" gap="16"
        >
            <Stack 
                className={styles.wrapper}
                gap="16" 
                align="alignCenter" 
                justify="justifyBetween"
            >
                <Stack 
                    direction="column" 
                    justify="justifyCenter" gap="16"
                >
                    <Text className={styles.text_name}>
                        {review.name}
                    </Text>
                    <Text className={styles.textSpeciality}>
                        {review.speciality}
                    </Text>
                </Stack>
                {children}
            </Stack>
            <Stars rating={review.rating} />
            <Text className={styles.review}>
                {review.review}
            </Text>
        </Stack>
    )
}

import { Stars } from "../../../../entities/Stars/ui/Stars/Stars";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./Review.module.scss";

export const Review = ({ review, children, className }) => {
    const {name, speciality, rating, text, title, verified} = review;

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
                    <Text className={styles.textName}>
                        {name}
                    </Text>
                    {verified && <Text className={styles.verified}>(подтвержденный профиль)</Text>}
                    { speciality && <Text className={styles.textSpeciality}>
                        {speciality}
                    </Text>}
                </Stack>
                {children}
            </Stack>
            <Stars rating={rating} />
            {title && <Text size="s">{title}</Text>}
            <Text className={styles.review}>
                {text}
            </Text>
        </Stack>
    )
}

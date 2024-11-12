import { Stars } from "../../../../entities/Stars/ui/Stars/Stars";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./Review.module.scss";

export const Review = ({ data, children, className }) => {
    const {name, speciality, status, rating, review, title, verified, rate} = data;

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
                    <Text className={styles.verified}>{verified ? '(подтвержденный профиль)' : status}</Text>
                    { speciality && <Text className={styles.textSpeciality}>
                        {speciality}
                    </Text>}
                </Stack>
                {children}
            </Stack>
            <Stars rating={rating ? rating : rate} />
            {title && <Text size="s">{title}</Text>}
            <Text className={styles.review}>
                {review}
            </Text>
        </Stack>
    )
}

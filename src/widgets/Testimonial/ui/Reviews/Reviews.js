import { Stack } from "../../../../shared/ui/Stack/Stack";
import { QuotesIcon } from "../QuotesIcon/QuotesIcon";
import { Review } from "../Review/Review";
import styles from "./Reviews.module.scss";

export const Reviews = ({reviews}) => {
    return (
        <Stack 
            max
            align="alignStart" 
            justify='justifyBetween'
            gap='48'
            className={styles.container}
        >
            {reviews.map(review => 
                <Review 
                    key={review.id}
                    review={review}
                >
                    <QuotesIcon />
                </Review>
            )}
        </Stack>
    )
}

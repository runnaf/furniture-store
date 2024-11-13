import { Stack } from "../../../../shared/ui/Stack/Stack";
import { QuotesIcon } from "../QuotesIcon/QuotesIcon";
import { Review } from "../../../../entities/Review/Review";
import styles from "./Reviews.module.scss";

export const Reviews = ({ reviews }) => {

    return (
        <Stack 
            max
            align="alignStart" 
            justify='justifyBetween'
            gap='48'
            className={styles.container}
        >
            {reviews.map((review, id) => 
                <Review 
                    key={id}
                    data={review}
                    verified={false}
                    status={false}
                >
                    <QuotesIcon />
                </Review>
            )}
        </Stack>
    )
}

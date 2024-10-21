import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Review } from "../Review/Review";

export const Reviews = ({reviews}) => {
    return (
        <Stack gap="32" align="alignCenter" justify="justifyCenter">
            {
                reviews.map(review => 
                    <Review review = {review} key = {review.id}/>
                )
            }
        </Stack>
    )
}

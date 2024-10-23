import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Review } from "../Review/Review";

export const Reviews = ({reviews}) => {
    return (
        <Stack 
            max
            align="alignCenter" 
            justify='justifyBetween'
            gap='48'
        >
            {reviews.map(review => 
                <Review 
                    key={review.id}
                    review={review} 
                />
            )}
        </Stack>
    )
}

import { Review } from "../Review/Review";
import styles from "./Reviews.module.scss";

export const Reviews = ({reviews}) => {
    return (
        <ul className={styles.reviewsContainer}>
            {
                reviews.map(review => 
                    <Review review = {review} key = {review.id}/>
                )
            }
        </ul>
    )
}

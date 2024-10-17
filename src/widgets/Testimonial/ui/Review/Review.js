import { starIcon } from "../../../../shared/assets/svg/starIcon";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./Review.module.scss";

const WHOLE_RATING = 5

export const Review = ({review}) => {
    return (
        <li className={styles.reviewItem}>
            <Stack className={styles.reviewUserContainer} gap= {'8'}>
                <Stack className={styles.reviewImageContainer} align={ 'alignCenter' } justify={'justifyCenter'}>
                    <img/>
                </Stack>
                <Stack direction = {'column'} justify = {'justifyCenter'} gap={'16'}>
                    <h3 className={styles.reviewUserName}>{review.name}</h3>
                    <p className={styles.reviewUserSpeciality}>{review.speciality}</p>
                    <Stack gap = {'8'}>                         
                        <ul className={styles.starsList}>
                            {Array.from({length: WHOLE_RATING}, (_, i) => i).map(rating =>
                                <li key={rating} id={rating} className={rating + 1 <= Math.round(review.rating) ? styles.ratingCurrent : styles.starDisable}>
                                    {starIcon()}
                                </li>
                            )}
                        </ul>
                        <span className="visually-hidden">`{Math.round(review.rating)} звезд из 5`</span>
                        <span className={styles.ratingTitle}>{review.rating.toFixed(1)}</span>
                    </Stack>
                </Stack>
            </Stack>
            <Stack className={styles.review}>
                {review.review}
            </Stack>
        </li>
    )
}

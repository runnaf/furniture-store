
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { StarIcon } from "../StarIcon/StarIcon";
import styles from "./Stars.module.scss"


const WHOLE_RATING = 5;

export const Stars = ({rating, ratingText=true}) => {
    const getStyles = (item) => {
        return item + 1 <= Math.round(rating) ? styles.ratingCurrent : styles.starDisable;
    };
    return (
        <Stack gap="8" align="alignCenter">                         
            {Array.from({length: WHOLE_RATING}, (_, i) => i).map(item =>
                <Stack key={item} className={getStyles(item)} >
                    <StarIcon />
                </Stack>
            )}
            {ratingText && 
                <>
                    <VisuallyHidden>`{Math.round(rating)} звeзд из 5`</VisuallyHidden>
                    <span className={styles.ratingTitle}>{Number(rating).toFixed(1)}</span>
                </>
            }
            
        </Stack>
    )
}

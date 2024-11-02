import { getStyles } from "../../../../shared/libs/getStyles";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { LikeIcon } from "../LikeIcon/LikeIcon";
import styles from "./Favorites.module.scss";

export const Favorites = ({favorites, toggleFavorite, className}) => {
    const mode = {
        [styles.favorites]: favorites,
    };

    const stylesName = getStyles(styles.button, mode, [className])

    return (
        <button className={ stylesName } type="button" onClick={toggleFavorite}>
            <LikeIcon />
            <VisuallyHidden>{favorites ? 'убрать из избранного' : 'добавить в избранное'}</VisuallyHidden>
        </button>
    )
}
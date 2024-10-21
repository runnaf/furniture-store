import { getStyles } from "../../../../shared/libs/getStyles";
import { Button } from "../../../../shared/ui/Button/Button";
import styles from "./BottomButtons.module.scss"

export const BottomButtons = ({styleMode, quantitySliders, quantityCardsOnPage, currentSlide, handleClickSlide}) => {
    const lengthArray = Math.ceil(quantitySliders.length / quantityCardsOnPage);
    const array = Array.from({length: lengthArray}, (_, i) => i);
    
    const mode = { [styleMode]: true }

    const additional = [
        styles[styleMode]
    ]; 
    const styleClass = getStyles(styles.container, mode, additional);
    
    return (
        <ul className = {styleClass}>
            {array.map((page) => 
                <li key={page} onClick = {()=> handleClickSlide(page)}>
                    <Button id={page} className = {currentSlide === page ? '' : styles.notPressed} />
                </li>)}
        </ul>
    )
}

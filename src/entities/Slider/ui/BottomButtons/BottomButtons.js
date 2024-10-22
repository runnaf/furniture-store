import { Button } from "../../../../shared/ui/Button/Button";
import styles from "./BottomButtons.module.scss"

export const BottomButtons = ({quantitySliders, quantityCardsOnPage, currentSlide, handleClickSlide}) => {
    const lengthArray = Math.ceil(quantitySliders.length / quantityCardsOnPage);
    const array = Array.from({length: lengthArray}, (_, i) => i);
    
    return (
        <ul className = {styles.container}>
            {array.map((page) => 
                <li key={page} onClick = {()=> handleClickSlide(page)}>
                    <Button id={page} className = {currentSlide === page ? '' : styles.notPressed} />
                </li>)}
        </ul>
    )
}

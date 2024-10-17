import { Button } from "../../../../shared/ui/Button/Button";
import styles from "./BottomButtons.module.scss"

export const BottomButtons = ({quontitySliders, quontityCardsOnPage, currentSlide, handleClickSlide}) => {
    const lengthArray = Math.ceil(quontitySliders.length / quontityCardsOnPage);
    const array = Array.from({length: lengthArray}, (_, i) => i);
    
    return (
        <ul className = {styles.container}>
            {array.map((page) => 
                <li className={styles.containerButton} key={page} onClick = {()=> handleClickSlide(page)}>
                    <Button id={page} className = {currentSlide === page ? '' : styles.notPressed} />
                </li>)}
        </ul>
    )
}

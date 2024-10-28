import { BottomButton } from "../BottomButton/BottomButton";
import styles from "./BottomButtons.module.scss";

export const BottomButtons = ({
        quantitySliders, 
        quantityCardsOnPage, 
        currentSlide, 
        handleClickSlide,
        color = 'primary' //primary | secondary
    }) => {

    const lengthArray = Math.ceil(quantitySliders.length / quantityCardsOnPage);
    
    const array = Array.from({length: lengthArray}, (_, i) => i);

    return (
        <ul className = {styles.container}>
            {array.map((page) => 
                <BottomButton 
                    key={page} 
                    page={page} 
                    color={color} 
                    currentSlide={currentSlide} 
                    handleClickSlide={handleClickSlide} 
                />
            )}
        </ul>
    );
};

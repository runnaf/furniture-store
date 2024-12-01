import { useState } from "react";

//TODO - перенести ко всем хука
export const useSlider = (quantityCards, initialIndex = 0) => {
    const [currentSlide, setCurrentSlide] = useState(initialIndex);

    const handleClickSlide = (selectedSlider) => {
        setCurrentSlide(selectedSlider);
    }
    
    const nextCard = () => {
        if (currentSlide === quantityCards-1) {
            setCurrentSlide(0)
        } else setCurrentSlide(currentSlide + 1)
    }

    const prevCard = () => { 
        if (currentSlide === 0) {
            setCurrentSlide(quantityCards - 1)
        } else setCurrentSlide(currentSlide - 1)
    }

    return { currentSlide, nextCard,  prevCard, handleClickSlide }
}

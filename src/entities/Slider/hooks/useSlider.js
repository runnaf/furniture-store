import { useState } from "react";

export const useSlider = (quontityCards, initialIndex = 0) => {
    const [currentSlide, setCurrentSlide] = useState(initialIndex);

    const handleClickSlide = (selectedSlider) => {
        setCurrentSlide(selectedSlider);
    }
    
    const nextCard = () => {
        if (currentSlide === quontityCards-1) {
            setCurrentSlide(0)
        } else setCurrentSlide(currentSlide + 1)
    }

    const prevCard = () => {
        if (currentSlide === 0) {
            setCurrentSlide(quontityCards - 1)
        } else setCurrentSlide(currentSlide - 1)
    }

    return { currentSlide, nextCard,  prevCard, handleClickSlide }
}

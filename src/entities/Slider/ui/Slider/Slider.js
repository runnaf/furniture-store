import { Stack } from "../../../../shared/ui/Stack/Stack";
import { BottomButtons } from "../BottomButtons/ui/BottomButtons/BottomButtons";
import { SideButtons } from "../SideButtons/SideButtons";

export const Slider = ({ 
    isSideButtons, 
    isBottomButtons, 
    quantityCardsOnPage,
    gap,
    children, 
    className,
    data, 
    currentSlide, 
    nextCard,  
    prevCard, 
    handleClickSlide,
    color,
    yellow
}) => {
    return (
        <Stack 
            className={className} 
            direction='column'
            gap={gap}
        >
            {children}
            <Stack justify="justifyCenter">
                {isSideButtons && (
                    <SideButtons 
                        nextCard={nextCard} 
                        prevCard={prevCard} 
                    />
                )}
                {isBottomButtons && (
                    <BottomButtons 
                        quantitySliders={data} 
                        quantityCardsOnPage={quantityCardsOnPage} 
                        currentSlide={currentSlide} 
                        handleClickSlide={handleClickSlide} 
                        color={color}
                        yellow={yellow}
                    />
                )}
            </Stack>
        </Stack>
    );
};


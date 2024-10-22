import { Stack } from "../../../../shared/ui/Stack/Stack";
import { BottomButtons } from "../BottomButtons/BottomButtons";
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
    handleClickSlide
}) => {
    return (
        <Stack className={className} direction = {'column'} gap={gap}>
            {children}
            <Stack>
                {isSideButtons && <SideButtons nextCard = {nextCard}  prevCard = {prevCard} />}
                {isBottomButtons && <BottomButtons quantitySliders={data} quantityCardsOnPage = {quantityCardsOnPage} currentSlide = {currentSlide} handleClickSlide = {handleClickSlide} />}
            </Stack>
        </Stack>
    );
};


import { Stack } from "../../../../shared/ui/Stack/Stack";
import { BottomButtons } from "../BottomButtons/BottomButtons";
import { SideButtons } from "../SideBottons/SideButtons";

export const Slider = ({ isSideButtons, 
                        isBottomButtons, 
                        quontityCardsOnPage,
                        gap,
                        children, 
                        className,
                        data, 
                        currentSlide, 
                        nextCard,  
                        prevCard, 
                        handleClickSlide}) => {

    return (
        <Stack className={className} direction = {'column'} gap={gap}>
            {children}
            <Stack>
                {isSideButtons? <SideButtons nextCard = {nextCard}  prevCard = {prevCard} /> : ''}
                {isBottomButtons ? <BottomButtons quontitySliders={data} quontityCardsOnPage = {quontityCardsOnPage} currentSlide = {currentSlide} handleClickSlide = {handleClickSlide} /> : ''}
            </Stack>
            
        </Stack>

    )
}


import { Slider } from "../../../../entities/Slider/ui/Slider/Slider";
import { useSlider } from "../../../../shared/hooks/useSlider";
import { card, QUANTITY_CARD_ON_PAGE } from "../../lib/data";
import { slicerOfArray } from "../../../../entities/Slider/lib/helper";
import { SlideRooms } from "../SlideRooms/SlideRooms";
import { DescriptionPreview } from "../DescriptionPreview/DescriptionPreview";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./Preview.module.scss";

export const Preview = () => {
    const { currentSlide, nextCard, prevCard } = useSlider(card.length);
    const rooms = slicerOfArray(card, currentSlide, QUANTITY_CARD_ON_PAGE);
    
    return (
        <section className={styles.previewContainer}>
            <Stack 
                justify="justifyBetween" 
                className={styles.previewWrapper} 
                max
            >
                <DescriptionPreview />
                <Slider 
                    isSideButtons={true} 
                    isBottomButtons={false} 
                    quantityCardsOnPage={ QUANTITY_CARD_ON_PAGE } 
                    className={styles.slider} 
                    data={card} 
                    currentSlide={currentSlide} 
                    nextCard={ nextCard } 
                    prevCard={ prevCard }
                    gap="24"
                >
                    <SlideRooms rooms={rooms} />
                </Slider>
            </Stack>
        </section>
    );
};



import { Slider } from "../../../../entities/Slider/ui/Slider/Slider";
import { useSlider } from "../../../../entities/Slider/hooks/useSlider";
import { card, QUANTITY_CARD_ON_PAGE } from "../../lib/data";
import { slicerOfArray } from "../../../../entities/Slider/lib/helper";
import { SlideRooms } from "../SlideRooms/SlideRooms";
import styles from "./Preview.module.scss";
import { DescriptionPreview } from "../DescriptionPreview/DescriptionPreview";

export const Preview = () => {
    const { currentSlide, nextCard,  prevCard } = useSlider(card.length);
    const rooms = slicerOfArray(card, currentSlide, QUANTITY_CARD_ON_PAGE);
    const authorized = false;
    
    return (
        <section className={styles.previewContainer}>
            <DescriptionPreview authorized = {authorized} />
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
        </section>
    );
};


import { Slider } from "../../../../entities/Slider/ui/Slider/Slider";
import { HeaderSection } from "../../../../shared/ui/HeaderSection/HeaderSection";
import { QUANTITY_CARD_ON_PAGE, testimonial, WIDTH_MOBILE_XL } from "../../lib/data";
import { useSlider } from "../../../../entities/Slider/hooks/useSlider";
import { slicerOfArray } from "../../../../entities/Slider/lib/helper";
import { Reviews } from "../Reviews/Reviews";
import { useResize } from "../../../../shared/hooks/useResize";
import styles from "./Testimonial.module.scss";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import points from '../../../../shared/assets/svg/points.svg';

export const Testimonial = () => {
    const { currentSlide, nextCard, prevCard, handleClickSlide } = useSlider(testimonial.length);
    const width = useResize();

    const quantityCardsOnPage = () => {        
        if (width <= WIDTH_MOBILE_XL) {
            return 1
        } else return QUANTITY_CARD_ON_PAGE
    }

    const reviews = slicerOfArray(testimonial, currentSlide, quantityCardsOnPage());

    return (
        <section className={styles.testimonialContainer}>
            <img src={points} alt="a cluster of dots"/>
            <img src={points} alt="a cluster of dots"/>
            <HeaderSection subTitle= "Отзывы">
                Что <span>говорят наши клиенты</span>
            </HeaderSection>
            <Stack 
                className={styles.testimonialsWrapper}
            >
                <Slider 
                    isSideButtons={false} 
                    isBottomButtons={true} 
                    quantityCardsOnPage={quantityCardsOnPage()} 
                    className={styles.slider} 
                    data={testimonial} 
                    currentSlide={currentSlide} 
                    nextCard={nextCard} 
                    prevCard={prevCard}
                    handleClickSlide={handleClickSlide}
                    gap="32"
                >
                    <Reviews reviews={reviews}/>
                </Slider>
            </Stack>
        </section>
    );
};

import { Slider } from "../../../../entities/Slider/ui/Slider/Slider";
import { HeaderSection } from "../../../../shared/ui/HeaderSection/HeaderSection";
import { QUONTITY_CARD_ON_PAGE, testimonial } from "../../lib/data"
import styles from "./Testimonial.module.scss";
import { useSlider } from "../../../../entities/Slider/hooks/useSlider";
import { slicerOfArray } from "../../../../entities/Slider/lib/helper";
import { Reviews } from "../Reviews/Reviews";


export const Testimonial = () => {
    const { currentSlide, nextCard,  prevCard, handleClickSlide } = useSlider(testimonial.length);
    const reviews = slicerOfArray(testimonial, currentSlide, QUONTITY_CARD_ON_PAGE)

    return (
        <section className={ styles.testimonialContainer }>
            <HeaderSection className = {styles.testimonialTitle} subTitle= {'Отзывы'}>Что <span>Говорят наши клиенты</span></HeaderSection>
            <Slider isSideButtons = {false} 
                    isBottomButtons = {true} 
                    quontityCardsOnPage = { QUONTITY_CARD_ON_PAGE } 
                    className = {styles.slider} 
                    data = {testimonial} 
                    currentSlide = {currentSlide} 
                    nextCard = { nextCard } 
                    prevCard = { prevCard }
                    handleClickSlide = { handleClickSlide }
                    gap={'32'}>
                    <Reviews reviews = {reviews}/>
            </Slider>
        </section>
        
    )
}

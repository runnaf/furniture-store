import { data, QUANTITY_CARD_ON_PAGE } from "../lib/data";
import { Slider } from "../../../entities/Slider/ui/Slider/Slider";
import { useSlider } from "../../../shared/hooks/useSlider";
import { slicerOfArray } from "../../../entities/Slider/lib/helper";
import styles from "./SliderForAuthorization.module.scss";

export const SliderForAuthorization = () => {
  const { currentSlide, nextCard, prevCard, handleClickSlide } = useSlider(data.length)
  const picture = slicerOfArray(data, currentSlide, QUANTITY_CARD_ON_PAGE)
  return (
    <Slider className={styles.container} 
            isBottomButtons 
            quantityCardsOnPage={QUANTITY_CARD_ON_PAGE} 
            data={data}
            currentSlide={currentSlide} 
            nextCard={nextCard} 
            prevCard={prevCard}
            handleClickSlide={handleClickSlide}
            color='secondary'
            yellow='yellow'
    >
      {
        picture.map((image, index)=> (
          <img src={image} alt='пример мебель магазина' 
                width='664' height='976' key={index} />
        ))
      }
    </Slider>
  )
}

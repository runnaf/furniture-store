import { useSlider } from "../../../../entities/Slider/hooks/useSlider";
import { slicerOfArray } from "../../../../entities/Slider/lib/helper";
import { BottomButton } from "../../../../entities/Slider/ui/BottomButtons/ui/BottomButton/BottomButton";
import { SideButtons } from "../../../../entities/Slider/ui/SideButtons/SideButtons";
import { Slider } from "../../../../entities/Slider/ui/Slider/Slider";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import {QUANTITY_CARD_ON_PAGE, goods} from "../../libs/data";
import styles from "./SliderOfProduct.module.scss";

export const SliderOfProduct = ({product}) => {
    const { currentSlide, nextCard, prevCard, handleClickSlide } = useSlider(goods.length);
    const array = slicerOfArray(goods, currentSlide, QUANTITY_CARD_ON_PAGE);
    console.log(array)
    return (
        <Slider 
            gap="12" 
            className={styles.container} 
            data={array} 
            currentSlide={currentSlide} 
            nextCard={ nextCard } 
            prevCard={ prevCard }
        >
            <Stack className={styles.previewGoodContainer}>
                {
                    array.map((previewGood) => (
                        <img src={previewGood.good} alt={product} width="584" height="700"/>
                    ))
                }
                <SideButtons nextCard={nextCard} prevCard={prevCard} />
            </Stack>
            
            <ul className={styles.imagesContainer}>
                {goods.map((good) => (
                    <BottomButton key={good.id} className={good.id === currentSlide ? styles.currentSlider : ''} currentSlide={currentSlide} handleClickSlide={handleClickSlide} page={good.id}>
                        <img src={good.good} alt={product} width="137" height="164"/>
                    </BottomButton>
                ))}
                
            </ul>
        </Slider>
    )
}

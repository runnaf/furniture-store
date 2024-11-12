import { useSlider } from "../../../../entities/Slider/hooks/useSlider";
import { slicerOfArray } from "../../../../entities/Slider/lib/helper";
import { BottomButton } from "../../../../entities/Slider/ui/BottomButtons/ui/BottomButton/BottomButton";
import { SideButtons } from "../../../../entities/Slider/ui/SideButtons/SideButtons";
import { Slider } from "../../../../entities/Slider/ui/Slider/Slider";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import {QUANTITY_CARD_ON_PAGE} from "../../libs/data";
import styles from "./SliderOfProduct.module.scss";

export const SliderOfProduct = ({data}) => {    
    const {sub_categories, images} = data;
    const { currentSlide, nextCard, prevCard, handleClickSlide } = useSlider(images.length);

    const array = slicerOfArray(images, currentSlide, QUANTITY_CARD_ON_PAGE);

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
                        <img src={previewGood} alt={sub_categories} width="584" height="700" key={previewGood.id}/>
                    ))
                }
                <SideButtons nextCard={nextCard} prevCard={prevCard} />
            </Stack>
            
            <ul className={styles.imagesContainer}>
                {images.map((good, id) => 
                (
                    <BottomButton key={id} className={id === currentSlide ? styles.currentSlider : ''} currentSlide={currentSlide} handleClickSlide={handleClickSlide} page={id}>
                        <img src={good} alt={sub_categories} width="137" height="164"/>
                    </BottomButton>
                )
                )}
                
            </ul>
        </Slider>
    )
}

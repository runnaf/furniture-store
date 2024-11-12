import { useState } from "react"
import { Button } from "../../../../shared/ui/Button/Button"
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom"
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Favorites } from "../Favorites/Favorites";
import { Quantity } from "../Quantity/Quantity";
import { Text } from "../../../../shared/ui/Text/Text";
import { ColorButton } from "../ColorButton/ColorButton"
import { getColorTitle } from "../../lib/helper";
import { ModalColor } from "../../../ModalColor/ModalColor";
import { ColorButtons } from "../ColorButtons/ColorButtons";
import { useModal } from "../../../../shared/hooks/useModal";
import styles from "./AddToCart.module.scss";

const INITIAL_VALUE = 1;

export const AddToCart = ({gap, colors, currentColor, isProduct=false}) => {
    const [changeColorModal, drawColorModal] = useModal()

    //состояние избранного товара
    const [favorites, setFavorites] = useState(false);
    const toggleFavorite = () => {
        setFavorites(!favorites)
    }

    //выбранный цвет
    const [current, setCurrent] = useState(currentColor);

    //количество товара
    const [count, setCount] = useState(INITIAL_VALUE);
    const increaseCount = () =>{
        setCount(count + 1)
    }
    const decreaseCount = () => {
        if (count !== 1) {
            setCount(count - 1)
        }
    }

    //открытие модального окна
    const addToCart = () => {
        if (!isProduct) {
            changeColorModal()
        }
    }

    return (
        <Stack className={styles.wrapper} gap={gap} direction="column">
            <Stack gap="12" direction="column">
                <Text size="s">Цвет: {getColorTitle(current)}</Text>
                {colors && current !== undefined && isProduct && (
                    <ColorButtons colors={colors} setCurrent={setCurrent} current={current} />
                )}
                {!colors && current !== undefined && isProduct && (
                    <ColorButton color={currentColor} setCurrent={setCurrent} current={currentColor} /> 
                )} 
                {!isProduct && drawColorModal(
                    <ModalColor colors = { colors } changeColorModal={changeColorModal} setCurrent={ setCurrent } current={current} />
                )}
            </Stack>
            <Stack className={styles.containerButton} align="alignCenter" gap="12">
                <Quantity className={styles.quantity} count={count}  increaseCount={increaseCount} decreaseCount={decreaseCount}/>
                <Stack align="alignCenter" gap="12">
                    <Button onClick={addToCart}>В корзину</Button>
                    <LinkCustom color="yellow" path="">Купить сейчас</LinkCustom>
                </Stack>
                <Favorites className={styles.favorites} favorites={favorites} toggleFavorite={toggleFavorite} />
            </Stack>
        </Stack>
    )
}

import { useState } from "react"
import { Button } from "../../../../shared/ui/Button/Button"
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom"
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Favorites } from "../Favorites/Favorites";
import { Quantity } from "../Quantity/Quantity";
import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./AddToCart.module.scss";
import { ColorButton } from "../ColorButton/ColorButton"
import { getColorTitle } from "../../lib/helper";

const INITIAL_VALUE = 1;

export const AddToCart = ({gap, colors, currentColor}) => {
    //состояние избранного товара
    const [favorites, setFavorites] = useState(false);
    const toggleFavorite = () => {
        setFavorites(!favorites)
    }

    //выбранный цвет
    const [current, setCurrent] = useState(currentColor);
    const toggleState = (color) => {
        setCurrent(color)
    }

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

    return (
        <Stack className={styles.wrapper} gap={gap} direction="column">
            <Stack gap="12" direction="column">
                <Text size="s">Цвет: {getColorTitle(current)}</Text>
                <ul className={styles.containerColor}>
                    {
                        colors.map((color) => (
                            <ColorButton key={color} color={color} toggleState={()=>toggleState(color)} current={current}/>
                        ))
                    }
                </ul>
            </Stack>
            <Stack className={styles.containerButton} align="alignCenter" gap="12">
                <Quantity className={styles.quantity} count={count}  increaseCount={increaseCount} decreaseCount={decreaseCount}/>
                <Stack align="alignCenter" gap="12">
                    <Button>В корзину</Button>
                    <LinkCustom color="yellow" path="">Купить сейчас</LinkCustom>
                </Stack>
                <Favorites className={styles.favorites} favorites={favorites} toggleFavorite={toggleFavorite} />
            </Stack>
        </Stack>
    )
}

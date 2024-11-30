import { useState } from "react";
import { Button } from "../../../../shared/ui/Button/Button"
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom"
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Favorites } from "../Favorites/Favorites";
import { Quantity } from "../Quantity/Quantity";
import { Text } from "../../../../shared/ui/Text/Text";
import { ColorButton } from "../../../../entities/Card/ui/ColorButton/ColorButton"
import { getColorTitle } from "../../lib/helper";
import { ColorButtons } from "../../../../entities/Card/ui/ColorButtons/ColorButtons";
import { useParams } from "react-router";
import styles from "./AddToCart.module.scss";

const INITIAL_VALUE = 1;

export const AddToCart = ({gap, colors, currentColor}) => {
    const {id, color} = useParams()

    //состояние избранного товара
    const [favorites, setFavorites] = useState(false);
    const toggleFavorite = () => {
        setFavorites(!favorites)
    }

    //выбранный цвет
    const [current, setCurrent] = useState(color);

    //открытие модального окна
    const addToCart = () => {
        console.log(current, favorites, id)
    }

    return (
        <Stack className={styles.wrapper} gap={gap} direction="column">
            <Stack gap="12" direction="column">
                <Text size="s">Цвет: {getColorTitle(current)}</Text>
                {colors && current !== undefined && (
                    <ColorButtons colors={colors} setCurrent={setCurrent} current={current} />
                )}
                {!colors && current !== undefined && (
                    <ColorButton color={currentColor} setCurrent={setCurrent} current={currentColor} /> 
                )} 
            </Stack>
            <Stack className={styles.containerButton} align="alignCenter" gap="12">
                <Quantity className={styles.quantity} quantity={INITIAL_VALUE} />
                <Stack align="alignCenter" gap="12">
                    <Button onClick={addToCart}>В корзину</Button>
                    <LinkCustom color="yellow" path="">Купить сейчас</LinkCustom>
                </Stack>
                <Favorites className={styles.favorites} favorites={favorites} toggleFavorite={toggleFavorite} />
            </Stack>
        </Stack>
    )
}

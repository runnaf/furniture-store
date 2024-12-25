import { useState } from "react";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { ColorButtons } from "../ColorButtons/ColorButtons";
import { Button } from "../../../../shared/ui/Button/Button";
import { getColorTitle } from "../../../../feature/AddToCart/lib/helper";
import showAlert from "../../../../widgets/Alert/Alert";
import styles from "./ModalColor.module.scss";

export const ModalColor = ({ colors, changeColorModal }) => {
    
    const [currentColor, setCurrentColor] = useState(colors[0].value ?? '');
    
    const handleSelectColor = (color) => {
        setCurrentColor(color)
    };

    const addTocart = () => {
        changeColorModal();
        showAlert('Товар добавлен!');
    };

    return (
            <Stack 
                className={styles.container} 
                direction="column" 
                gap="32" 
                align="alignCenter" 
                justify="justifyCenter"
            >
                <Text type="h3" size="s">
                    Выберите цвет товара
                </Text>
                <Text>Цвет: {getColorTitle(currentColor)}</Text>
                <ColorButtons 
                    colors={colors} 
                    handleSelectColor={handleSelectColor}
                    current={currentColor}
                />
                <Button 
                    className={styles.btn_add}
                    onClick={addTocart}
                >
                    добавить в корзину
                </Button>
                <button 
                    className={styles.buttonClosed} 
                    type="button"
                    onClick={changeColorModal}
                >
                    <VisuallyHidden>Закрыть модальное окно</VisuallyHidden>
                </button>
            </Stack>
    )
}

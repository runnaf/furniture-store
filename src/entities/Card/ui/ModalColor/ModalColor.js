import { useState } from "react";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { ColorButtons } from "../ColorButtons/ColorButtons";
import styles from "./ModalColor.module.scss";
import { Button } from "../../../../shared/ui/Button/Button";

export const ModalColor = ({ id, colors, changeColorModal }) => {
    
    const [currentColor, setCurrentColor] = useState(colors[0].value ?? '');
    
    const handleSelectColor = (color) => {
        setCurrentColor(color);
    };

    //TODO - добавить товар в корзину, показать сообщение, что товар добавлен в корзину
    const addTocart = () => {
        console.log(id);
        console.log(currentColor);
        changeColorModal();
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

import { useState } from "react";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { ColorButtons } from "../ColorButtons/ColorButtons";
import styles from "./ModalColor.module.scss";
import { Button } from "../../../../shared/ui/Button/Button";

//TODO - по своей сути это фича выбор цвета, я бы вынесла в фичу, и в таком случае нам не придется дублировать
//плюс также кнопки смены приходится отдавать другому документу, что не правильно делать, а то здесь удалим и там работать не будет
export const ModalColor = ({ id, colors, changeColorModal }) => {
    
    const [currentColor, setCurrentColor] = useState(colors[0].value ?? '');
    
    const handleSelectColor = (color) => {
        setCurrentColor(color);
    };

    //TODO - добавить товар в корзину, показать сообщение, что товар добавлен в корзину
    //я вот подумала, а может вместо передачи пропсов сделать Redux для всей корзины
    //а то уже через 3 компонента прокидываем пропсы
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

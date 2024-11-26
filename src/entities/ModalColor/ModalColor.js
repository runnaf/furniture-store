import { Stack } from "../../shared/ui/Stack/Stack";
import { Text } from "../../shared/ui/Text/Text";
import { VisuallyHidden } from "../../shared/ui/VisuallyHidden/VisuallyHidden";
import { ColorButtons } from "../../feature/AddToCart/ui/ColorButtons/ColorButtons";
import styles from "./ModalColor.module.scss";

export const ModalColor = ({colors, setCurrent, current, changeColorModal}) => {

    return (

            <Stack className={styles.container} direction="column" gap="32" align="alignCenter" justify="justifyCenter">
                <Text type="h3" size="s">Выберите цвет товара</Text>
                <ColorButtons colors={colors} setCurrent={setCurrent} current={current}/>
                <button className={styles.buttonClosed} type="button" onClick={changeColorModal}>
                    <VisuallyHidden>Закрыть модальное окно</VisuallyHidden>
                </button>
            </Stack>

    )
}

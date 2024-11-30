import { Button } from "../../../../shared/ui/Button/Button"
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom"
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Quantity } from "../Quantity/Quantity";
import styles from "./AddToCart.module.scss";

const INITIAL_VALUE = 1;

export const AddToCart = ({ color, id}) => {
    //TODO - кол-во получить доступ к значение в этом компоненте
    const addToCart = () => {
        console.log(id, color, )
    }

    return (
        <Stack className={styles.wrapper} gap={32} direction="column">
            <Stack className={styles.containerButton} align="alignCenter" gap="12">
                <Quantity className={styles.quantity} quantity={INITIAL_VALUE} />
                <Stack align="alignCenter" gap="12">
                    <Button onClick={addToCart}>В корзину</Button>
                    {/* TODO - считаю данная кнопка не нужна */}
                    <LinkCustom color="yellow" path="">Купить сейчас</LinkCustom>
                </Stack>
            </Stack>
        </Stack>
    );
};

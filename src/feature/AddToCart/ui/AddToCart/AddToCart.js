import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../../shared/ui/Button/Button"
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Quantity } from "../Quantity/Quantity";
import { addToCart } from '../../model/cartSlice';
import styles from "./AddToCart.module.scss";

const INITIAL_VALUE = 1;

export const AddToCart = ({ color, id}) => {

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(INITIAL_VALUE);
    console.log(id, color, quantity)

    const handleAddToCart = () => {
      dispatch(addToCart({id, color, quantity}));
    };

    return (
        <Stack className={styles.wrapper} gap={32} direction="column">
            <Stack className={styles.containerButton} align="alignCenter" gap="12">
                <Quantity className={styles.quantity} quantity={quantity} setQuantity={setQuantity} />
                <Stack align="alignCenter" gap="12">
                    <Button onClick={handleAddToCart}>В корзину</Button>
                </Stack>
            </Stack>
        </Stack>
    );
};

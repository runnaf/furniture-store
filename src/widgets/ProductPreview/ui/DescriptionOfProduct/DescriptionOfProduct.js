import { Stars } from "../../../../entities/Stars/Stars";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { InStock } from "../InStock/InStock";
import styles from "./DescriptionOfProduct.module.scss";
import { AddToCart } from "../../../../feature/AddToCart/ui/AddToCart/AddToCart";

export const DescriptionOfProduct = ({product}) => {
    const {categories, title, rating, inStock, review, price, oldPrice, description, colors, sku, tags} = product;

    return (
        <Stack className={styles.container} direction="column" gap="24">
            <Text>{categories}</Text>
            <Stack className={styles.inStockContainer} gap="16" align="alignCenter">
                <Text size="s">{title}</Text>
                {inStock && <InStock />}
            </Stack>
            <Stack className={styles.rating} gap="8" align="alignCenter">
                <Stars rating={rating} />
                <Text size="s">({review} отзывов)</Text>
            </Stack>
            <Stack gap="8" align="alignCenter">
                <Text size="md">{price} руб.</Text>
                {oldPrice && <Text className={styles.oldPrice} size="md">{oldPrice} руб.</Text>}
            </Stack>
            <Text>{description}</Text>
            <AddToCart gap="32" colors={colors} currentColor={colors[1]}/>
            <Stack className={styles.tagsContainer} direction="column" gap="12">
                <Text>Артикул: <span>{sku}</span></Text>
                <Text>Тэги: <span>{tags.join(', ')}</span></Text>
            </Stack>
        </Stack>
    )
}
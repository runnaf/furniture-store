
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { InStock } from "../InStock/InStock";
import { AddToCart } from "../../../../feature/AddToCart/ui/AddToCart/AddToCart";
import { Stars } from "../../../../entities/Stars/ui/Stars/Stars";
import styles from "./DescriptionOfProduct.module.scss";

export const DescriptionOfProduct = ({product}) => {
    const { sub_categories, name, inStock = true, rating=4.9, review='250' , sale_price, price, short_description, article_number, tags } = product
     // TODO  inStock, rating, review, colors=['Черный', 'Коричневый', 'Серый', 'Желтый']
    const colors=['Черный', 'Коричневый', 'Серый', 'Желтый']
    return (
        <Stack className={styles.container} direction="column" gap="24">
            <Text>{sub_categories}</Text>
            <Stack className={styles.inStockContainer} gap="16" align="alignCenter">
                <Text size="s">{name}</Text>
                {inStock && <InStock />}
            </Stack>
            <Stack className={styles.rating} gap="8" align="alignCenter">
                <Stars rating={rating} />
                <Text size="s">({review} отзывов)</Text>
            </Stack>
            <Stack gap="8" align="alignCenter">
                <Text size="md">{sale_price} руб.</Text>
                {price && <Text className={styles.oldPrice} size="md">{price} руб.</Text>}
            </Stack>
            <Text>{short_description}</Text>
            <AddToCart gap="32" colors={colors} isProduct={false} />
            <Stack className={styles.tagsContainer} direction="column" gap="12">
                <Text>Артикул: <span>{article_number}</span></Text>
                <Text>Тэги: <span>{tags.join(', ')}</span></Text>
            </Stack>
        </Stack>
    )
}

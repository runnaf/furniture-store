
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { InStock } from "../InStock/InStock";
import { AddToCart } from "../../../../feature/AddToCart/ui/AddToCart/AddToCart";
import { Stars } from "../../../../entities/Stars/ui/Stars/Stars";
import { useParams } from "react-router";
import { useGetReviewsByProductIdQuery } from "../../../ProductItem/api/ProductApi";
import styles from "./DescriptionOfProduct.module.scss";
import { countStars, endingOfTheWordReview, calculateAverageStars } from "../../../TabsProduct/lib/helpers";

export const DescriptionOfProduct = ({product}) => {
    const { id } = useParams();
    const { data } = useGetReviewsByProductIdQuery(id);

    const stars = Number(calculateAverageStars(countStars(data)))

    const { sub_categories, name, inStock = true, sale_price, price, short_description, color, article_number, tags } = product

    //const colors=['Черный', 'Коричневый', 'Серый', 'Желтый']
    return (
        <Stack className={styles.container} direction="column" gap="24">
            <Text>{sub_categories}</Text>
            <Stack className={styles.inStockContainer} gap="16" align="alignCenter">
                <Text size="s">{name}</Text>
                {inStock && <InStock />}
            </Stack>
            <Stack className={styles.rating} gap="8" align="alignCenter">
                <Stars rating={stars ? stars : '0'} />
                <Text size="s">({data ? `${data.length} отзыв${endingOfTheWordReview(data.length)}`: 'отзывов на данный товар еще нет'})</Text>
            </Stack>
            <Stack gap="8" align="alignCenter">
                <Text size="md">{sale_price} руб.</Text>
                {price && <Text className={styles.oldPrice} size="md">{price} руб.</Text>}
            </Stack>
            <Text>{short_description}</Text>
            <AddToCart gap="32" currentColor={color} isProduct={true} />
            <Stack className={styles.tagsContainer} direction="column" gap="12">
                <Text>Артикул: <span>{article_number}</span></Text>
                <Text>Тэги: <span>{tags.join(', ')}</span></Text>
            </Stack>
        </Stack>
    )
}

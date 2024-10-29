import { HeaderSection } from "../../../../shared/ui/HeaderSection/HeaderSection";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { data } from "../../libs/data";
import { QuantityItem } from "../QuantityItem/QuantityItem";
import styles from "./ProductQuantityDescription.module.scss";

export const ProductQuantityDescription = () => {
    return (
        <Stack className={styles.container} direction="column" gap="32" align="alignCenter" justify="justifyCenter">
            <Stack gap="24" direction="column">
                <HeaderSection subTitle= "Качество нашей продукции">
                    Устанавливая <span>стандарты качества мебели</span>
                </HeaderSection>
                <Text>Мы строго следим за качеством нашей продукции, используя только высококлассные материалы и современные технологии производства.</Text>
            </Stack>
            <Stack>
            {
                data.map((item) => (
                    <QuantityItem key={item.title} item={item} />
                ))
            }
            </Stack>
        </Stack>
    )
}

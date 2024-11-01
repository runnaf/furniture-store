import { HeaderSection } from "../../shared/ui/HeaderSection/HeaderSection"
import { Stack } from "../../shared/ui/Stack/Stack";
import cardData from '../../shared/libs/cardData';
import styles from "./RelatedProducts.module.scss";
import { Card } from "../../entities/Card/ui/Card";

export const RelatedProducts = () => {
    return (
        <section className={styles.wrapper}>
            <HeaderSection subTitle= "Сопутствующие товары">
                Изучите <span>cопутствующие товары</span>
            </HeaderSection>
            <Stack gap="32" className={styles.card}>
                {cardData.map((element) => (
                    <Card {...element} timer={false} />
                ))}
            </Stack>
        </section>
    )
}
import { HeaderSection } from "../../../../shared/ui/HeaderSection/HeaderSection";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import styles from "./DescriptionHistory.module.scss";

export const DescriptionHistory = () => {
    return (
        <Stack 
            gap="24" direction="column"
            className={styles.container}
        >
            <HeaderSection 
                className={styles.title} 
                subTitle="Наша история"
            >
                Созданный комфорт:
                <br />
                <span>качественные материалы, долговечный дизайн</span>
            </HeaderSection>
            <Text size="s">
                Наша цель — преобразить ваше пространство в уютное и стильное место, где
                каждый элемент служит выражением вашей индивидуальности и жизненных
                ценностей. Дизайна нашей мебели, будет служить вам и вашей семье на
                протяжении многих лет.
            </Text>
        </Stack>
    );
};

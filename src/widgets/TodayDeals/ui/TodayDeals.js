import { Stack } from "../../../shared/ui/Stack/Stack";
import cardData from '../../../shared/libs/cardData';
import { Card } from "../../../entities/Card/ui/Card";
import styles from './TodayDeals.module.scss';
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection";

export function TodayDeals () {
    return (
        <Stack direction="column" gap='48' className={styles.mainContainer}>
            <HeaderSection subTitle='Выгодные предложения'>
                <span>Выгодные </span>предложения дня
            </HeaderSection>

            <Stack 
                justify='justifyBetween' 
                className={styles.container}
            >
                {cardData.slice(0, 2).map(element=>(
                    <Stack key={element.id} className={styles.cardContainer}>
                        <Card {...element} view="extended" />
                    </Stack>))}
            </Stack>
        </Stack>
    );
};
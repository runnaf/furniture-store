import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";
import cardData from '../../../shared/libs/cardData';
import { Card } from "../../../entities/Card/ui/Card";
import styles from './TodayDeals.module.scss';

export function TodayDeals () {
    return (
        <Stack direction="column" gap='48' className={styles.mainContainer}>
            <Stack direction="column" gap='16' className={styles.title}>
                <Text size='s'><span className={styles.hyphen}>&mdash; </span> Выгодные предложения</Text>
                <Text className={styles.subtitle}><span>Выгодные </span>предложения дня</Text>
            </Stack>
            <Stack className={styles.container}>
                {cardData.slice(0, 2).map(element=>(
                    <Stack key={element.id} className={styles.cardContainer}>
                        {Card({...element, view: 'extended'})}
                    </Stack>))}
            </Stack>
        </Stack>
    )
}
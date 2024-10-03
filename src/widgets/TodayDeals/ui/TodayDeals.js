import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";
import cardData from '../../../shared/libs/cardData';
import { Card } from "../../../entities/Card/ui/Card";
import styles from './TodayDeals.module.scss';

export function TodayDeals () {
    return (
        <Stack direction="column" gap='16'>
            <Text className={styles.title} size='s'><span className={styles.hyphen}>&mdash; </span> Выгодные предложения</Text>
            <Text className={styles.subtitle}>Выгодные предложения дня</Text>
            <Stack>
                {cardData.slice(0, 2).map(element=>(
                    <Stack key={element.id} className={styles.cardContainer}>
                        {Card({...element, view: 'extended'})}
                    </Stack>))}
            </Stack>
        </Stack>
    )
}
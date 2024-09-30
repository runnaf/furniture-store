import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";
import cardData from '../../../shared/libs/cardData';
import { Card } from "../../../entities/Card/ui/Card";
import styles from './TodayDeals.module.scss';

export function TodayDeals () {
    return (
        <Stack direction="column">
            <Text><span className={styles.hyphen}>&mdash; </span> Выгодные предложения</Text>
            <Text>Выгодные предложения дня</Text>
            <Stack>
                {cardData.map(element=>Card({...element, view: 'extended'}))}
            </Stack>
        </Stack>
    )
}
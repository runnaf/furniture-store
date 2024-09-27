import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import { Button } from '../../../shared/ui/Button/Button';
import { Card } from '../../Card/ui/Card';
import productsData from '../lib/data';
import styles from './OurProducts.module.scss';

export function OurProducts () {
    return (
        <Stack direction='column' align='alignCenter' gap='16'>
            <Text size='s'><span className={styles.hyphen}>&mdash; </span>Наша продукция</Text>
            <Text type='h3' className={styles.title}>Каталог товаров</Text>
            <Stack gap='16' className={styles.buttonsContainer}>
                <Button size='s' color='outlined'>Все товары</Button>
                <Button size='s'>Новинки</Button>
                <Button size='s' color='outlined'>Популярное</Button>
                <Button size='s' color='outlined'>Рекомендуемые</Button>
            </Stack>
            <Stack gap='32'>
            {productsData.map(element => Card(element))}
            </Stack>
        </Stack>
    )
}
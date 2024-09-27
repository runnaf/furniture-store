import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import { Button } from '../../../shared/ui/Button/Button';
import { Card } from '../../Card/ui/Card';
import productsData from '../lib/data'

export function OurProducts () {
    return (
        <Stack direction='column'>
            <Text>Наша продукция</Text>
            <Text type='h3'>Каталог товаров</Text>
            <Stack>
                <Button>Все товары</Button>
                <Button>Новинки</Button>
                <Button>Популярное</Button>
                <Button>Рекомендуемые</Button>
            </Stack>
            <Stack gap='32'>
            {productsData.map(element => Card(element))}
            </Stack>
        </Stack>
    )
}
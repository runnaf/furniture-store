import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import styles from './FilterBar.module.scss';

export function FilterBar () {

    const line = <hr width='100%' color='var(--stroke-color)' size='1' className={styles.line}/>
    return (
        <Stack direction='column' gap='24'>
            <Text type='h2'>Настройки фильтра</Text>
            {line}
            <Text>Категория</Text>
            <Text><input type='checkbox' value='bedroom' name='bedroom' checked/> Спальня</Text>
            <Text><input type='checkbox' name='bedroom' /> Гостиная</Text>
            <Text><input type='checkbox' name='bedroom' /> Офис</Text>
            <Text><input type='checkbox' name='bedroom' /> Спальня</Text>
            <Text><input type='checkbox' name='bedroom' /> Кухня</Text>
            <Text><input type='checkbox' name='bedroom' /> Спальня</Text>
            <Text><input type='checkbox' name='bedroom' /> Декор</Text>
            {line}
            <Text>Цена</Text>
            <input type="range" min="0" max="100000" step="100" value="5000"></input>
            {line}
            <Text>Цвет</Text>
            <Text><input type='radio' name='bedroom' checked/> Коричневый</Text>
            <Text><input type='radio' name='bedroom' /> Серый</Text>
            <Text><input type='radio' name='bedroom' /> Черный</Text>
            <Text><input type='radio' name='bedroom' /> Зеленый</Text>
            <Text><input type='radio' name='bedroom' /> Красный</Text>
            <Text><input type='radio' name='bedroom' /> Оранжевый</Text>
            <Text><input type='radio' name='bedroom' /> Синий</Text>
            <Text><input type='radio' name='bedroom' /> Белый</Text>
            {line}
            <Text>Материал</Text>
            <Text><input type='checkbox' name='bedroom' /> Офис</Text>
            <Text><input type='checkbox' name='bedroom' /> Спальня</Text>
            <Text><input type='checkbox' name='bedroom' /> Кухня</Text>
            <Text><input type='checkbox' name='bedroom' /> Спальня</Text>
            <Text><input type='checkbox' name='bedroom' /> Декор</Text>
            {line}
            <Text>Доступность</Text>
            <Text><input type='checkbox' name='bedroom' /> Спальня</Text>
            <Text><input type='checkbox' name='bedroom' /> Декор</Text>
        </Stack>
    )
}
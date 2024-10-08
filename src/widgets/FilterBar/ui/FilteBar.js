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
            <Text><input type='checkbox' value='livingRoom' name='livingRoom' /> Гостиная</Text>
            <Text><input type='checkbox' value='office' name='office' /> Офис</Text>
            <Text><input type='checkbox' value='lighting' name='lighting' /> Освещение</Text>
            <Text><input type='checkbox' value='kitchen' name='kitchen' /> Кухня</Text>
            <Text><input type='checkbox' value='outdoor' name='outdoor' /> Для улицы</Text>
            <Text><input type='checkbox' value='decor' name='decor' /> Декор</Text>
            {line}
            <Text>Цена</Text>
            <input type="range" min="0" max="100000" step="100" value="5000"></input>
            {line}
            <Text>Цвет</Text>
            <Text><input type='radio' value='brown' name='brown' checked/> Коричневый</Text>
            <Text><input type='radio' value='grey' name='grey' /> Серый</Text>
            <Text><input type='radio' value='black' name='black' /> Черный</Text>
            <Text><input type='radio' value='green' name='green' /> Зеленый</Text>
            <Text><input type='radio' value='red' name='red' /> Красный</Text>
            <Text><input type='radio' value='orange' name='orange' /> Оранжевый</Text>
            <Text><input type='radio' value='blue' name='blue' /> Синий</Text>
            <Text><input type='radio' value='white' name='white' /> Белый</Text>
            {line}
            <Text>Материал</Text>
            <Text><input type='checkbox' value='metal' name='metal' /> Металл</Text>
            <Text><input type='checkbox' value='wood' name='wood' /> Дерево</Text>
            <Text><input type='checkbox' value='upholstered' name='upholstered' /> С мягкой обивкой</Text>
            <Text><input type='checkbox' value='glass' name='glass' /> Стекло</Text>
            <Text><input type='checkbox' value='plastic' name='plastic' /> Пластик</Text>
            {line}
            <Text>Доступность</Text>
            <Text><input type='checkbox' value='inStock' name='inStock' /> В наличии</Text>
            <Text><input type='checkbox' value='outOfStock' name='outOfStock' /> Нет в наличии</Text>
        </Stack>
    )
}
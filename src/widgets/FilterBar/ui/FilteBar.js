import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import styles from './FilterBar.module.scss';
import React, { useState } from 'react';
import ReactSlider from 'react-slider';

export function FilterBar () {
    const line = <hr width='100%' color='var(--stroke-color)' size='1' className={styles.line}/>

    const [selectedFilters, setSelectedFilters] = useState({
        category: {},
        price: [0, 100000],
        color: '',
        material: {},
        availability: {}
    });

    const handleChange = (type, value) => {
        setSelectedFilters(prev => ({
            ...prev,
            [type]: value
        }));
    };

  
    const handleSliderChange = (values) => {
        handleChange('price', values);
    };

    return (
        <Stack direction='column' gap='24' className={styles.container}>
            <Text type='h2' size='s'>Настройки фильтра</Text>
            {line}
            <Text className={styles.subtitle}>Категория</Text>
            <Text><input type='checkbox' value='bedroom' name='bedroom' onChange={() => handleChange('category', 'bedroom')}/> Спальня</Text>
            <Text><input type='checkbox' value='livingRoom' name='livingRoom' onChange={() => handleChange('category', 'livingRoom')} /> Гостиная</Text>
            <Text><input type='checkbox' value='office' name='office' onChange={() => handleChange('category', 'office')} /> Офис</Text>
            <Text><input type='checkbox' value='lighting' name='lighting' onChange={() => handleChange('category', 'lighting')} /> Освещение</Text>
            <Text><input type='checkbox' value='kitchen' name='kitchen' onChange={() => handleChange('category', 'kitchen')} /> Кухня</Text>
            <Text><input type='checkbox' value='outdoor' name='outdoor' onChange={() => handleChange('category', 'outdoor')} /> Для улицы</Text>
            <Text><input type='checkbox' value='decor' name='decor' onChange={() => handleChange('category', 'decor')} /> Декор</Text>
            {line}
            <Text className={styles.subtitle}>Цена</Text>
            <Stack>
                <span className={styles.price}>{selectedFilters.price[0]}р</span>&nbsp;-&nbsp;
                <span className={styles.price}> {selectedFilters.price[1]}р</span>
            </Stack>
            <ReactSlider
                min={0}
                max={100000}
                step={500}
                value={selectedFilters.price}
                onChange={handleSliderChange}
                renderThumb={(props) => <div {...props} className={styles.thumb} />}
                renderTrack={(props, state) => <div {...props} className={`${styles.track} ${state.index === 0 ? styles.trackMin : styles.trackMax}`} />}
                className={styles.slider}
            />            
            {line}
            <Text className={styles.subtitle}>Цвет</Text>
            <Text><input type='radio' value='brown' name='brown' onChange={() => handleChange('color', 'brown')}/> Коричневый</Text>
            <Text><input type='radio' value='grey' name='grey' onChange={() => handleChange('color', 'grey')} /> Серый</Text>
            <Text><input type='radio' value='black' name='black' onChange={() => handleChange('color', 'black')} /> Черный</Text>
            <Text><input type='radio' value='green' name='green' onChange={() => handleChange('color', 'green')} /> Зеленый</Text>
            <Text><input type='radio' value='red' name='red' onChange={() => handleChange('color', 'red')} /> Красный</Text>
            <Text><input type='radio' value='orange' name='orange' onChange={() => handleChange('color', 'orange')} /> Оранжевый</Text>
            <Text><input type='radio' value='blue' name='blue' onChange={() => handleChange('color', 'blue')} /> Синий</Text>
            <Text><input type='radio' value='white' name='white' onChange={() => handleChange('color', 'white')} /> Белый</Text>
            {line}
            <Text className={styles.subtitle}>Материал</Text>
            <Text><input type='checkbox' value='metal' name='metal' onChange={() => handleChange('material', 'metal')} /> Металл</Text>
            <Text><input type='checkbox' value='wood' name='wood' onChange={() => handleChange('material', 'wood')} /> Дерево</Text>
            <Text><input type='checkbox' value='upholstered' name='upholstered' onChange={() => handleChange('material', 'upholstered')} /> С мягкой обивкой</Text>
            <Text><input type='checkbox' value='glass' name='glass' onChange={() => handleChange('material', 'glass')} /> Стекло</Text>
            <Text><input type='checkbox' value='plastic' name='plastic' onChange={() => handleChange('material', 'plastic')} /> Пластик</Text>
            {line}
            <Text className={styles.subtitle}>Доступность</Text>
            <Text><input type='checkbox' value='inStock' name='inStock' onChange={() => handleChange('availability', 'inStock')} /> В наличии</Text>
            <Text><input type='checkbox' value='outOfStock' name='outOfStock' onChange={() => handleChange('availability', 'outOfStock')} /> Нет в наличии</Text>
            <Text>Выбранные фильтры: {JSON.stringify(selectedFilters)}</Text>
        </Stack>
    );
}

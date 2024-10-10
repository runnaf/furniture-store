import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import styles from './FilterBar.module.scss';
import React, { useState } from 'react';

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
        setSelectedFilters(prev => {
            if (type === 'category') {
                return { ...prev, category: value };
            }
            if (type === 'price') {
                return { ...prev, price: value };
            } 
            if (type === 'color') {
                return { ...prev, color: value };
            }
            if (type === 'material') {
                return { ...prev, material: value };
            }
            if (type === 'availability') {
                return { ...prev, availability: value };
            }
            const updated = prev[type].includes(value)
                ? prev[type].filter(item => item !== value)
                : [...prev[type], value];
            return { ...prev, [type]: updated };
        });
    };

    const [minPrice, maxPrice] = selectedFilters.price;

    const handleMinChange = (e) => {
        const value = Math.min(e.target.value, maxPrice);
        handleChange('price', [value, maxPrice]);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(e.target.value, minPrice);
        handleChange('price', [minPrice, value]);
    };

    return (
        <Stack direction='column' gap='24'>
            <Text type='h2' size='s'>Настройки фильтра</Text>
            {line}
            <Text className={styles.subtitle}>Категория</Text>
            {/* Чекбоксы категорий */}
            {line}
            <Text className={styles.subtitle}>Цена</Text>
            <input 
                type="range" 
                min="0" 
                max="100000" 
                step="500" 
                value={minPrice} 
                onChange={handleMinChange} 
            />
            <input 
                type="range" 
                min="0" 
                max="100000" 
                step="500" 
                value={maxPrice} 
                onChange={handleMaxChange} 
            />
            <div>
                <span>Минимум: {minPrice}</span>
                <span>Максимум: {maxPrice}</span>
            </div>
            {line}
            <Text className={styles.subtitle}>Материал</Text>
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

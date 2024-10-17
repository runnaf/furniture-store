import { Text } from '../../shared/ui/Text/Text';
import { Stack } from '../../shared/ui/Stack/Stack';
import styles from './FilterBar2.module.scss';
import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { Filters } from '../../entities/Filters/ui/Filters';
import filtersData from '../../shared/libs/filtersData';

export function FilterBar2 () {
    
  
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
            <hr />
    
            <Filters 
                title="Категория" 
                options={filtersData.category} 
                type="checkbox" 
                onChange={handleChange} 
            />
    
            <hr />
    
            <Stack direction='column'>
                <Text className={styles.subtitle}>Цена</Text>
                <Stack>
                    <span className={styles.price}>{selectedFilters.price[0]}р</span>&nbsp;-&nbsp;
                    <span className={styles.price}>{selectedFilters.price[1]}р</span>
                </Stack>
                <ReactSlider
                    min={0}
                    max={100000}
                    step={500}
                    value={selectedFilters.price}
                    onChange={handleSliderChange}
                    renderThumb={(props) => <div {...props} className={styles.thumb} />}
                    renderTrack={(props, state) => (
                        <div {...props} className={`${styles.track} ${state.index === 0 ? styles.trackMin : styles.trackMax}`} />
                    )}
                    className={styles.slider}
                />
            </Stack>
    
            <hr />
    
            <Filters 
                title="Цвет" 
                options={filtersData.color} 
                type="radio" 
                onChange={handleChange} 
            />
            
            <hr />
    
            <Filters 
                title="Материал" 
                options={filtersData.material} 
                type="checkbox" 
                onChange={handleChange} 
            />
    
            <hr />
    
            <Filters 
                title="Доступность" 
                options={filtersData.availability} 
                type="checkbox" 
                onChange={handleChange} 
            />
    
            <Text>Выбранные фильтры: {JSON.stringify(selectedFilters)}</Text>
        </Stack>
    );
    
}

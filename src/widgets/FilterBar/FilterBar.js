import { Text } from '../../shared/ui/Text/Text';
import { Stack } from '../../shared/ui/Stack/Stack';
import styles from './FilterBar.module.scss';
import React, { useState, useCallback } from 'react';
import ReactSlider from 'react-slider';
import { Filters } from '../../entities/Filters/ui/Filters';
import filtersData from './lib/filtersData';

export function FilterBar() {
    const [selectedFilters, setSelectedFilters] = useState({
        category: {},
        price: [0, 100000],
        color: {},
        material: {},
        availability: {}
    });

    const handleChange = useCallback((type, value) => {
        setSelectedFilters(prev => ({
            ...prev,
            [type]: value
        }));
    }, []);

    const handleSliderChange = (values) => {
        handleChange('price', values);
    };

    const renderFilter = (key) => {
        const {title, items} = filtersData[key];
        return (
            <React.Fragment key={key}>
                <Filters
                    key={key}
                    title={title}
                    filters={items}
                    selectedFilters={selectedFilters[key]}
                    onChange={(value) => handleChange(key,value)}
                />
                {key !== 'availability' && <hr/>}
            </React.Fragment>
        );        
    }

    return (
        <Stack direction='column' gap='24' className={styles.container}>
            <Text type='h2' size='s'>Настройки фильтра</Text>
            <hr />
            {renderFilter('category')}
            <Stack direction='column' gap='16'>
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
                        <div {...props} className={`${styles.track} ${state.index === 0 || state.index === 2 ? styles.trackMin : styles.trackMax}`} />
                    )}
                    className={styles.slider}
                />                 
            </Stack>
            <hr />
            {['color', 'material', 'availability'].map(renderFilter)}
        </Stack>
    );
}
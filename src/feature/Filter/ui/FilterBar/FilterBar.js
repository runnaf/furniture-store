import { Text } from '../../../../shared/ui/Text/Text';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Button } from '../../../../shared/ui/Button/Button';
import styles from './FilterBar.module.scss';
import React, { useCallback, useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
import { Filters } from '../../../../entities/Filters/ui/Filters';
import { filtersData } from '../../../Filter/lib/filtersData';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, clearAllFilters } from '../../model/filterSlice';
import { useResize } from '../../../../shared/hooks/useResize';


export function FilterBar({ toggleMenu }) {

    const width = useResize()

    const dispatch = useDispatch();
    const selectedFilters = useSelector(state => state.filters);
    const [temporaryFilters, setTemporaryFilters] = useState(selectedFilters);

    useEffect(() => {
        setTemporaryFilters(selectedFilters)
    }, [selectedFilters])

    const handleChange = useCallback((key, value) => {
        setTemporaryFilters((prev) => ({
            ...prev,
            [key]: key === 'price' ? value : {
                ...prev[key],
                ...value
            }
        }))
    }, [])
    
    const handleShowFilters = useCallback(() => {
        dispatch(setFilter(temporaryFilters))
        if(width <= 820) toggleMenu()
    }, [dispatch, temporaryFilters, toggleMenu, width]);

    const handleClearAll = useCallback(() => {
        dispatch(clearAllFilters());
        setTemporaryFilters({}); 
    }, [dispatch])

    const handleSliderChange = useCallback((values) => {
        handleChange('price', values);
    }, [handleChange])

    const renderFilter = (key) => {
        const { title, items } = filtersData[key];
        return (
            <React.Fragment>
                <Filters
                    key={key}
                    title={title}
                    filters={items}
                    selectedFilters={selectedFilters[key]}
                    onChange={(value) => handleChange(key, value)}
                />
                {key !== 'availability' && <hr />}
            </React.Fragment>
        )    
    }

    return (
        <Stack 
            direction='column' 
            gap='24' 
            className={styles.container}
        >
            <Text type='h2' size='s'>Настройки фильтра</Text>

            <hr />
            {renderFilter('category')}
            <Stack 
                className={styles.priceContainer}
                direction='column' 
                gap='16'
            >
                <Text className={styles.subtitle}>Цена</Text>
                <Stack>
                    <Text className={styles.price}>{selectedFilters.price[0]}₽</Text>&nbsp;-&nbsp;
                    <Text className={styles.price}>{selectedFilters.price[1]}₽</Text>
                </Stack>
                <ReactSlider
                    min={0}
                    max={100000}
                    step={500}
                    value={temporaryFilters.price}
                    onChange={handleSliderChange}
                    renderThumb={(props) => {
                        const { key, ...restProps } = props
                        return (
                            <div {...restProps} key={key} className={styles.thumb} />
                        )}}
                    renderTrack={(props, state) => {
                        const { key, ...restProps } = props;  
                        return (
                            <div {...restProps} key={key} className={`${styles.track} ${state.index === 1 ? styles.trackMax : styles.trackMin}`} />
                        );
                    }}
                    className={styles.slider}
                    
                />                 
            </Stack>
            <hr />
            {['color', 'material', 'availability'].map(renderFilter)}
            <Stack
                gap='8'
                direction='column'
                className={styles.buttonContainer}
            >
                <Button onClick={handleShowFilters}>Показать</Button>            
                <Button color='outlined'  onClick={handleClearAll}>Очистить</Button>
            </Stack>
        </Stack>
    );
}
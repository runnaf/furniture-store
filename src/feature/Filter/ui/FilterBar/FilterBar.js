import { Text } from '../../../../shared/ui/Text/Text';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Button } from '../../../../shared/ui/Button/Button';
import React, { useCallback, useState } from 'react';
import { FiltersItem } from '../FiltersItem/FiltersItem';
import { filtersData } from '../../../Filter/lib/filtersData';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, clearAllFilters } from '../../model/filterSlice';
import { useResize } from '../../../../shared/hooks/useResize';
import { FilterPrice } from '../FilterPrice/FilterPrice';
import styles from './FilterBar.module.scss';

export function FilterBar({ toggleMenu }) {

    const width = useResize();
    const dispatch = useDispatch();
    const selectedFilters = useSelector((state) => state.filters);
    const [temporaryFilters, setTemporaryFilters] = useState(selectedFilters)

    const handleChange = useCallback((key, value) => {
        setTemporaryFilters((prev) => ({
            ...prev,
            [key]: key === 'price' ? value : { ...prev[key], ...value }
        }))
    }, []);

    const handleShowFilters = useCallback(() => {
        dispatch(setFilter(temporaryFilters))
        if (width <= 820) toggleMenu()
    }, [dispatch, temporaryFilters, toggleMenu, width]);


    const handleClearAll = useCallback(() => {
        dispatch(clearAllFilters());

    }, [dispatch]);


    const renderFilter = (key) => {
        const { title, items } = filtersData[key];
        return (
            <React.Fragment key={key}>
                <FiltersItem
                    title={title}
                    filters={items}
                    selectedFilters={selectedFilters[key]}
                    onChange={(value) => handleChange(key, value)}
                />
                {key !== 'availability' && <hr />}
            </React.Fragment>
        );
    };

    return (
        <Stack 
            direction="column" 
            gap="24" 
            className={styles.container}
        >
            <Text type="h2" size="s">Настройки фильтров</Text>            
            <hr />
            <FilterPrice 
                onHandleChange={handleChange}
                onHandleClearAll={handleClearAll}
                temporaryFilters={temporaryFilters}
            />
            <hr />
            {Object.keys(filtersData).map(renderFilter)} 
            <Stack 
                gap="8" 
                className={styles.buttonContainer}
            >
                <Button onClick={handleShowFilters}>Показать</Button>
                <Button color="secondary" onClick={handleClearAll}>Сбросить</Button>
            </Stack>        
        </Stack>
    );
};

import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, clearAllFilters } from '../../entities/Filters/model/filterSlice';
import { Button } from "../../shared/ui/Button/Button";
import { LinkCustom } from "../../shared/ui/LinkCustom/LinkCustom";
import { Stack } from "../../shared/ui/Stack/Stack";
import filtersData from "../FilterBar/lib/filtersData";
import styles from './ActiveFilters.module.scss';

export const ActiveFilters = () => {
    const dispatch = useDispatch();
    const selectedFilters = useSelector(state => state.filters);

    const hasActiveFilters = Object.values(selectedFilters).some(value => {
        if (Array.isArray(value)) {
            return value[0] !== 0 || value[1] !== 100000; 
        }
        return typeof value === 'object' && Object.keys(value).length > 0; 
    });

    return (
        <Stack className={styles.activeFiltersContainer} align='alignCenter' gap='16'>
            {hasActiveFilters && (
            <span>Выбранные фильтры</span>
            )}
            {Object.entries(selectedFilters).map(([key, value]) => {
                if (key === 'price') {
                    if (value[0] !== 0 || value[1] !== 100000) {
                    return (
                        <Stack key={key} className={styles.filterChip} gap='8' align='alignCenter'>
                            {`Цена: ${value[0]} - ${value[1]}`} 
                            <Button onClick={() => dispatch(clearFilter(key))} className={styles.closeButton}>x</Button>
                        </Stack>
                    );
                }
                } else if (typeof value === 'object' && Object.keys(value).length > 0) {
                    const labels = Object.keys(value)
                        .filter(val => value[val]) 
                        .map(val => filtersData[key].items.find(item => item.value === val)?.label)
                        .filter(Boolean) 
                        .join(', ');

                    return (
                        <Stack key={key} className={styles.filterChip} gap='8' align='alignCenter'>
                            {labels}
                            <Button onClick={() => dispatch(clearFilter(key))} className={styles.closeButton}>x</Button>
                        </Stack>
                    );
                }
                return null;
            })}
            {hasActiveFilters && (
            <LinkCustom className={styles.clearAll} onClick={() => dispatch(clearAllFilters())} color='secondary'>Очистить все</LinkCustom>
            )}
        </Stack>
    );
}
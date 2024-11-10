import { routes } from "../../../app/routes/lib/data"
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs"
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle"
import { Stack } from "../../../shared/ui/Stack/Stack"
import cards from "../../../shared/libs/cardData"
import { Card } from "../../../entities/Card/ui/Card"
import styles from "./Shop.module.scss"
import { Text } from "../../../shared/ui/Text/Text"
import { useDispatch, useSelector } from 'react-redux';
import { clearAllFilters, clearFilter } from '../../../feature/Filter/model/filterSlice';
import {filtersData} from "../../../feature/Filter/lib/filtersData";
import { useResize } from "../../../shared/hooks/useResize"
import SortMenu from "../../../feature/Filter/ui/SortMenu/SortMenu"
import { FilterBar } from "../../../feature/Filter/ui/FilterBar/FilterBar"
import { MobileFilterBar } from "../../../feature/Filter/ui/MobileFilterBar/MobileFilterBar"
import { Pagination } from "../../../entities/Pagination.js/ui/Pagination"
import { Button } from "../../../shared/ui/Button/Button"
import { DeleteFilter } from "../../../shared/assets/svg/deleteFilter"
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages"

// const CARDS_PER_PAGE = 12

export const Shop = () => {

    const width = useResize();
    const isMobile = width <= 820;
    const dispatch = useDispatch();
    const selectedFilters = useSelector(state => state.filters)

    console.log(selectedFilters)


    const hasActiveFilters = Object.entries(selectedFilters).some(([key, value]) => {
        if (Array.isArray(value) && value.length === 2) {
            return value[0] !== 0 || value[1] !== 100000
        } 
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            return Object.keys(value).length > 0;
        }
        return false;
    });


    const activeFilters = Object.entries(selectedFilters).reduce((acc, [key, value]) => {
        if (Array.isArray(value) && value.length === 2) {
            if (value[0] !== 0 || value[1] !== 100000) {
                acc.push({ label: `Цена: ${value[0]}₽ - ${value[1]}₽`, key, value });
            }
        } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            Object.keys(value).forEach(val => {
                if (value[val]) {
                    const label = filtersData[key].items.find(item => item.value === val)?.label;
                    if (label) acc.push({ label, key, value: val });
                }
            })
        }
        return acc;
    }, []);
    
    console.log(selectedFilters, hasActiveFilters)
    const deleteFilter = (remoteFilter) => {
        dispatch(clearFilter({category: remoteFilter.key, key: remoteFilter.value}))
    }

    const shownResults = 
    <Stack 
        align='alignCenter'
    >
        <Text>Показано 9 из 27 результатов</Text>
    </Stack>

    return (
        <Stack 
            direction='column' 
            gap='75' 
            align='alignCenter'
            justify='justifyCenter'
            className={styles.container}
        >
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>

            <Stack 
                justify='justifyCenter' 
                align='alignCenter' 
                gap='75'
                className={styles.wrapper}
            >
                <Stack 
                    gap='32'
                >
                    {!isMobile && <FilterBar /> }                 
                    <Stack 
                        direction='column' 
                        gap='24'
                    >
                        <Stack 
                            className={styles.sortContainer} 
                            justify='justifyBetween'
                        >
                            {isMobile ? <MobileFilterBar /> : shownResults}
                            <SortMenu/>
                        </Stack>

                        {isMobile && shownResults}

                        {hasActiveFilters && (
                        <Stack 
                            className={styles.activeFiltersContainer} 
                            align="alignCenter" 
                            gap="16"
                        >
                            <span>Выбранные фильтры: </span>
                            {activeFilters.map((filter, index) => (
                                <Stack 
                                    key={index} 
                                    className={styles.filterChip} 
                                    gap="8" 
                                    align="alignCenter"
                                    justify='justifyCenter'
                                >
                                    {filter.label}
                                    <Button onClick={() => deleteFilter(filter)} color='secondary' outlined>
                                        <DeleteFilter/>
                                    </Button>
                                </Stack>
                            ))}
                            <Button className={styles.clearAll} color='link' outlined onClick={() => dispatch(clearAllFilters())}>
                                Очистить все
                            </Button>
                        </Stack>
                        )}
                        <Stack 
                            gap='32' 
                            className={styles.cardsContainer}
                        >
                            {cards.map((element) => <Card key={element.id} {...element}/>)}
                        </Stack>
                        <Pagination totalPages={2}/>
                    </Stack>
                </Stack>
            </Stack>
            <Advantages />
        </Stack>
    )
}
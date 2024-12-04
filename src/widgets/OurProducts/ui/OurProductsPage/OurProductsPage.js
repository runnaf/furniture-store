import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card } from "../../../../entities/Card/ui/Card"
import { PaginationLib } from "../../../../entities/PaginationLib/PaginationLib"
import { filtersData } from "../../../../feature/Filter/lib/filtersData"
import { clearAllFilters, clearFilter } from "../../../../feature/Filter/model/filterSlice"
import { MobileFilterBar } from "../../../../feature/Filter/ui/MobileFilterBar/MobileFilterBar"
import SortMenu from "../../../../feature/Filter/ui/SortMenu/SortMenu"
import { DeleteFilter } from "../../../../shared/assets/svg/deleteFilter"
import { Button } from "../../../../shared/ui/Button/Button"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { Text } from "../../../../shared/ui/Text/Text"
import { useGetAllProductsQuery } from "../../api/productApi"
import styles from './OurProductsPage.module.scss'


const ARTICLE_PER_PAGE = 12;

export const OurProductsPage = ({ isMobile }) => {

    const dispatch = useDispatch();
    const selectedFilters = useSelector(state => state.filters)
    const selectedOption = useSelector(state => state.sort)
    const [selectPage, setSelectPage] = useState(1);
    
    const handlePageChange = (e) => {
        setSelectPage(e.selected + 1);
    };

    const { 
    data,
    error, 
    isLoading } = useGetAllProductsQuery({
            limit: ARTICLE_PER_PAGE,
            page: selectPage,
            filters: {
            sort: selectedOption,
            filter: selectedFilters
        }
    })

    if (isLoading) {
        return <Stack>Loading...</Stack> //TODO
    }

    if (error) {
        return <Stack>Error: {error.message}</Stack> //TODO
    }

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
                acc.push({ label: `Цена: ${value[0]} ₽ - ${value[1]} ₽`, key, value });
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
    
    const deleteFilter = (remoteFilter) => {
        dispatch(clearFilter({category: remoteFilter.key, key: remoteFilter.value}))
    }

    const shownResults = 
    <Stack 
        align='alignCenter'
    >
        <Text>Показано 9 из 27 результатов</Text>
    </Stack>

    return(
        <Stack 
            className={styles.ourProductsPage}
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
                className={styles.cardsPage}
                direction='column'
                justify='justifyBetween'
                gap='75'
            >
                <Stack 
                    gap='32' 
                    className={styles.cardsContainer}
                >
                    {data?.products.map(product => (
                        <Card 
                            key={product._id} 
                            id={product._id}  
                            color={product.color} 
                            rating={product.rating}
                            promotion={product.promotion} 
                            sub_categories={product.sub_categories} 
                            name={product.name}
                            price={product.price} 
                            sale_price={product.sale_price} 
                            timer={product.timer}
                            short_description={product.short_description}
                        />
                    )
                    )}
                </Stack>
                <PaginationLib
                    onPageChange={handlePageChange}
                    forcePage={selectPage - 1} 
                    pageCount={data?.totalPages ?? 1} />
            </Stack>
        </Stack>
    )
}
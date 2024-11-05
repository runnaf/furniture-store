import { routes } from "../../../app/routes/lib/data"
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs"
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { FilterBar } from "../../../widgets/FilterBar/FilterBar"
import { MobileFilterBar } from "../../../widgets/FilterBar/ui/MobileFilterBar/MobileFilterBar"
import cards from "../../../shared/libs/cardData"
import { Card } from "../../../entities/Card/ui/Card"
import styles from "./Shop.module.scss"
import arrow from "../../../shared/assets/svg/arrow-down.svg"
import { Button } from "../../../shared/ui/Button/Button"
import { useEffect, useMemo, useState } from "react"
import SortMenu from "../../../feature/SortMenu/ui/SortMenu"
import { Text } from "../../../shared/ui/Text/Text"
import { useDispatch, useSelector } from 'react-redux';
import { clearAllFilters } from '../../../entities/Filters/model/filterSlice';
import { LinkCustom } from "../../../shared/ui/LinkCustom/LinkCustom";
import filtersData from "../../../widgets/FilterBar/lib/filtersData";
import { useResize } from "../../../shared/hooks/useResize"

const CARDS_PER_PAGE = 12

export const Shop = () => {

    const dispatch = useDispatch();
    const selectedFilters = useSelector(state => state.filters);

    const hasActiveFilters = Object.values(selectedFilters).some(value => {
        if (Array.isArray(value)) {
            return value[0] !== 0 && value[1] !== 100000; 
        }
        return typeof value === 'object' && Object.keys(value).length > 0; 
    });

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE)

    const currentCards = useMemo(() => {
        const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
        return cards.slice(startIndex, startIndex + CARDS_PER_PAGE)
    }, [currentPage])

    useEffect(() => {
        window.scrollTo({ top: 100, behavior: 'smooth' })
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page)
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    };

    const paginationButtons = useMemo(() => {
        return Array.from({ length: totalPages }, (_, index) => (
            <Button 
                key={index} 
                color="outlined"
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
                className={currentPage === index + 1 ? styles.active : ''}>
                {index + 1}
            </Button>
        ));
    }, [currentPage, totalPages]);

    const sortOptions = [
        { value: 'default', label: 'По умолчанию' },
        { value: 'priceAsc', label: 'Цена по возрастанию' },
        { value: 'priceDesc', label: 'Цена по убыванию' },
    ];

    const handleSortSelect = (value) => {
        console.log('Выбрана сортировка:', value);
    };

    const startIndex = (currentPage - 1) * CARDS_PER_PAGE + 1;
    const endIndex = Math.min(startIndex + CARDS_PER_PAGE - 1, cards.length);

    const width = useResize();
    const isMobile = width < 1100;
    const shownResults = 
    <Stack align='alignCenter'>
    <Text>Показано {startIndex}-{endIndex} из {cards.length} результатов</Text>
    </Stack>

    return (
        <Stack 
            direction='column' 
            gap='75' 
            className={styles.container}
            align='alignCenter'
            justify='justifyCenter'>
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>
            <Stack justify='justifyCenter' align='alignCenter' gap='75'>
            <Stack gap='32'>
                {!isMobile ? <FilterBar /> : ''}                 
                    <Stack direction='column' gap='24'>
                    <Stack className={styles.sortContainer} justify='justifyBetween'>
                    {isMobile ? <MobileFilterBar /> : shownResults}
                        <SortMenu options={sortOptions} onSelect={handleSortSelect} />
                    </Stack>
                    {isMobile ? shownResults : ''}
                    <Stack className={styles.activeFiltersContainer} align='alignCenter' gap='16'>
            {hasActiveFilters && <span>Выбранные фильтры</span>}
            {Object.entries(selectedFilters).map(([key, value]) => {
                if (key === 'price') {
                    if (value[0] !== 0 && value[1] !== 100000) {
                        return (
                            <Stack key={key} className={styles.filterChip} gap='8' align='alignCenter'>
                                {`Цена: ${value[0]} - ${value[1]}`} 
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
                        </Stack>
                    );
                }
                return null;
            })}
            {hasActiveFilters && (
                <LinkCustom className={styles.clearAll} onClick={() => dispatch(clearAllFilters())} color='secondary'>Очистить все</LinkCustom>
            )}
        </Stack>
                    <Stack gap='32' className={styles.cardsContainer}>
                        {currentCards.map ((element) => <Card {...element}/>)}
                    </Stack>
                    <Stack gap='24' justify='justifyCenter' className={styles.btnContainer}>
                        <Button color="outlined" onClick={handlePreviousPage} disabled={currentPage === 1}>
                            <img src={arrow} alt="previous page"/>
                        </Button>
                        {paginationButtons}
                        <Button color="outlined" onClick={handleNextPage} disabled={currentPage === totalPages}>
                            <img src={arrow} alt="next page"/>
                        </Button>
                    </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
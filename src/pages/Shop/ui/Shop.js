import { routes } from "../../../app/routes/lib/data"
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs"
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { FilterBar } from "../../../widgets/FilterBar/FilterBar"
import cards from "../../../shared/libs/cardData"
import { Card } from "../../../entities/Card/ui/Card"
import styles from "./Shop.module.scss"
import arrow from "../../../shared/assets/svg/arrow-down.svg"
import { Button } from "../../../shared/ui/Button/Button"
import { useEffect, useMemo, useState } from "react"
import SortMenu from "../../../widgets/SortMenu/ui/SortMenu"
import { Text } from "../../../shared/ui/Text/Text"

const CARDS_PER_PAGE = 12

export const Shop = () => {

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
            <Stack gap='32'>
                <FilterBar /> 
                <Stack direction='column' justify='justifyCenter' align='alignCenter' gap='75'>
                    <Stack className={styles.sortContainer} justify='justifyBetween'>
                        <Stack>
                            <Text>Показано {startIndex}-{endIndex} из {cards.length} результатов</Text>
                        </Stack>
                        <SortMenu options={sortOptions} onSelect={handleSortSelect} />
                    </Stack>
                    <Stack></Stack>
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
    )
}
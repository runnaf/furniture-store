import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { Stack } from "../../../shared/ui/Stack/Stack"
import styles from './Pagination.module.scss'
import arrow from "../../../shared/assets/svg/arrow-down.svg"

export const Pagination = ({ totalPages }) => {

    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = useCallback((page) => {
        setCurrentPage(page)
    }, [])

    const handlePreviousPage = useCallback(() => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }, [currentPage])

    const handleNextPage = useCallback(() => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }, [currentPage, totalPages])

    useEffect(() => {
        window.scrollTo({ top: 100, behavior: 'smooth' })
    }, [currentPage]);

    const paginationButtons = useMemo(() => {
        return Array.from({ length: totalPages }, (_, index) => (
            <Button 
                key={index} 
                color="outlined"
                radius="circle"
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
                className={currentPage === index + 1 ? styles.active : ''}>
                {index + 1}
            </Button>
        ));
    }, [currentPage, totalPages, handlePageChange]);

    return(
        <Stack 
            gap='24' 
            justify='justifyCenter' 
            className={styles.btnContainer}
        >
            <Button color="outlined" onClick={handlePreviousPage} disabled={currentPage === 1}>
                <img src={arrow} alt="previous page"/>
            </Button>
            {paginationButtons}
            <Button color="outlined" onClick={handleNextPage} disabled={currentPage === totalPages}>
                <img src={arrow} alt="next page"/>
            </Button>
        </Stack>
    )
}
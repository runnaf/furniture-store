import ReactPaginate from "react-paginate"
import { ArrowPagination } from "../../shared/assets/svg/arrowPagination"
import { Stack } from "../../shared/ui/Stack/Stack"
import styles from './PaginationLib.module.scss'

export const PaginationLib = ({onPageChange, forcePage, pageCount}) => {
    return(
        <Stack 
            className={styles.container}
            justify='center'
            align='center'
        >
            <ReactPaginate
                containerClassName={styles.paginationContainer}
                nextLabel={<span aria-label="Next Page"><ArrowPagination/></span>} 
                previousLabel={<span aria-label="Previous Page"><ArrowPagination/></span>}
                nextClassName={styles.next}
                previousClassName={styles.previous}
                activeClassName={styles.active}
                pageClassName={styles.page}
                disabledLinkClassName={styles.disabledLink}
                onPageChange={onPageChange}
                forcePage={forcePage} 
                pageCount={pageCount} 
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                breakLabel=". . ."
                breakClassName={styles.break}
            />
        </Stack>
    )
}
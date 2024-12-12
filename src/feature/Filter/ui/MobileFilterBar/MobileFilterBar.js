import filter from '../../../../shared/assets/svg/filter.svg';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { FilterBar } from '../FilterBar/FilterBar';
import { Button } from '../../../../shared/ui/Button/Button';
import { useToggleMenu } from '../../../../shared/hooks/useToggleMenu';
import useOverflowHidden from '../../../../shared/hooks/useOverflowHidden';
import { DeleteFilter } from '../../../../shared/assets/svg/deleteFilter';
import styles from './MobileFilterBar.module.scss'; 
import { getStyles } from '../../../../shared/libs/getStyles';

export function MobileFilterBar() {

    const { isOpen, toggleMenu, menuRef } = useToggleMenu();
    useOverflowHidden(isOpen);

    return (
        <Stack>
            <Button 
                color='outlined' 
                onClick={toggleMenu} 
                className={styles.filterButton}
                aria-expanded={isOpen}
                aria-controls="filter-menu"
            >
                <img src={filter} alt="Фильтр" className={styles.filterIcon} />
                Фильтр
            </Button>
            <Stack 
                ref={menuRef} 
                id="filter-menu"
                role="dialog"
                aria-labelledby="filter-title"
                justify='justifyCenter'
                className={getStyles(styles.popup, {[styles.open]: isOpen}, [])}
            >
                <Stack 
                    className={styles.popupContent} 
                    direction='column' 
                    gap='12'
                >
                    <Button 
                        onClick={toggleMenu} 
                        aria-label="Закрыть фильтры"
                    >
                        <DeleteFilter/>
                    </Button>
                    <FilterBar toggleMenu={toggleMenu}/>
                </Stack>
            </Stack>
        </Stack>
    )
}
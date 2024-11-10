import styles from './MobileFilterBar.module.scss'; 
import filter from '../../../../shared/assets/svg/filter.svg';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { FilterBar } from '../FilterBar/FilterBar';
import { Button } from '../../../../shared/ui/Button/Button';
import { useToggleMenu } from '../../../../shared/hooks/useToggleMenu';

export function MobileFilterBar() {

    const { isOpen, toggleMenu, menuRef } = useToggleMenu()

    return (
        <Stack>
            <Button color='outlined' onClick={toggleMenu} className={styles.filterButton}>
                <img src={filter} alt="Фильтр" className={styles.filterIcon} />
                Фильтр
            </Button>

            {isOpen && (
            <Stack 
                ref={menuRef} 
                justify='justifyCenter'
                className={styles.popup}
            >
                <Stack 
                    className={styles.popupContent} 
                    direction='column' 
                    gap='12'
                >
                    <Button onClick={toggleMenu} className={styles.closeButton} 
                    color='primary'>Закрыть</Button>
                    <FilterBar toggleMenu={toggleMenu}/>
                </Stack>
            </Stack>
            )}
        </Stack>
    )
}
import { useState } from 'react';
import styles from './MobileFilterBar.module.scss'; 
import filter from '../../../../shared/assets/svg/filter.svg';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { FilterBar } from '../../FilterBar';
import { Button } from '../../../../shared/ui/Button/Button';

export function MobileFilterBar() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <Stack>
            <button onClick={togglePopup} className={styles.filterButton}>
                <img src={filter} alt="Фильтр" className={styles.filterIcon} />
                Фильтр
            </button>

            {isOpen && (
            <Stack className={styles.popup} justify='justifyCenter' align='alignCenter'>
                <Stack className={styles.popupContent} direction='column' gap='12'>
                    <Button onClick={togglePopup} className={styles.closeButton} outlined size='xxs'>Закрыть</Button>
                    <FilterBar />
                </Stack>
            </Stack>
        )}

        </Stack>
    );
}
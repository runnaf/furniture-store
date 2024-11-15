import React, { useEffect, useState } from 'react';
import filter from '../../../../shared/assets/svg/filter.svg';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { FilterBar } from '../FilterBar/FilterBar';
import { Button } from '../../../../shared/ui/Button/Button';
import { useToggleMenu } from '../../../../shared/hooks/useToggleMenu';
import useOverflowHidden from '../../../../shared/hooks/useOverflowHidden';
import { DeleteFilter } from '../../../../shared/assets/svg/deleteFilter';
import styles from './MobileFilterBar.module.scss'; 

export function MobileFilterBar() {

    const { isOpen, toggleMenu, menuRef } = useToggleMenu();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setVisible(true); 
            }, 300); 
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 500); 
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useOverflowHidden(isOpen);
    
    return (
        <Stack>
            <Button color='outlined' onClick={toggleMenu} className={styles.filterButton}>
                <img src={filter} alt="Фильтр" className={styles.filterIcon} />
                Фильтр
            </Button>

            {isVisible && (
                <Stack 
                    ref={menuRef} 
                    justify='justifyCenter'
                    className={`${styles.popup} ${isOpen ? styles.open : ''}`}
                >
                    <Stack 
                        className={styles.popupContent} 
                        direction='column' 
                        gap='12'
                    >
                        <Button onClick={toggleMenu}>
                            <DeleteFilter/>
                        </Button>
                        <FilterBar toggleMenu={toggleMenu}/>
                    </Stack>
                </Stack>
            )}
        </Stack>
    )
}
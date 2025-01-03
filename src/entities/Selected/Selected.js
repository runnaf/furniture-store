import { useCallback, useMemo } from 'react';
import { Stack } from '../../shared/ui/Stack/Stack';
import { Button } from '../../shared/ui/Button/Button';
import { useToggleMenu } from '../../shared/hooks/useToggleMenu';
import { Check, ChevronDown } from 'lucide-react';
import { getStyles } from '../../shared/libs/getStyles';
import { VisuallyHidden } from '../../shared/ui/VisuallyHidden/VisuallyHidden';
import styles from './Selected.module.scss';

export const Selected = ({
    sortOptions,
    selectedOption,
    onSortChange,
    label,
}) => {

    const { isOpen, toggleMenu, menuRef } = useToggleMenu()

    const handleSortSelect = useCallback((value, label) => {
        onSortChange(value, label)
        toggleMenu()
    }, [onSortChange, toggleMenu])

    const options = useMemo(() => {
        return sortOptions.map((option) => (
            <li
                key={option.value}
                className={styles.option}
                onClick={() => handleSortSelect(option.value, option.label)}
            >
                {option.label}
                {selectedOption.option === option.value && 
                <Check />}
            </li>
        ));
    }, [sortOptions, handleSortSelect, selectedOption.option])

    return (
        <Stack
            ref={menuRef}
            className={styles.sortContainer}
            gap="24"
            justify="justifyCenter"
            align="alignCenter"
        >
            {label && 
                <span>{label}</span>
            }
            <Button
                type='button'
                outlined
                onClick={toggleMenu}
                className={getStyles(styles.sortButton, {[styles.openSort] : isOpen}, [])}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                aria-controls="sort-menu"
            >
                {selectedOption.label || 'Выберите цвет'} 
                <>
                    <ChevronDown/>
                    <VisuallyHidden>Открыть меню сортировки</VisuallyHidden>
                </>
            </Button>
            {isOpen && (
                <ul
                    className={styles.dropdown}
                    role="menu"
                    aria-hidden={!isOpen}
                >
                    {options}
                </ul>
            )}
        </Stack>
    )
}
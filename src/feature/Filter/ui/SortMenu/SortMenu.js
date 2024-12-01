import { Button } from '../../../../shared/ui/Button/Button'; 
import styles from './SortMenu.module.scss'; 
import arrow from '../../../../shared/assets/svg/arrow-down.svg';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { sortData } from '../../lib/sortData'
import { useToggleMenu } from '../../../../shared/hooks/useToggleMenu';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../model/sortSlice';

const SortMenu = () => {
    
    const {isOpen, toggleMenu, menuRef} = useToggleMenu()
    const selectedOption = useSelector(state => state.sort)
    const dispatch = useDispatch()

    const handleSortSelect = (value, label) => {
        dispatch(setSort({value, label}));
        toggleMenu() 
    }

    return (
        <Stack 
            ref={menuRef}
            className={styles.sortContainer} 
            gap='24' 
            justify='justifyCenter' 
            align='alignCenter'
        >
            <span>Сортировка: </span>
            <Button 
                outlined 
                onClick={toggleMenu} 
                className={styles.sortButton}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                aria-controls="sort-menu"
            >
                {selectedOption.label} <img src={arrow} alt="arrow" />
            </Button>
            {isOpen && (
                <div 
                    className={styles.dropdown}
                    id="sort-menu"
                    role="menu"
                    aria-hidden={!isOpen}
                >
                    {/* TODO - советуют такие вещи выносить в useMemo */}
                    {sortData.map((option) => (
                        <div 
                            key={option.value} 
                            className={styles.option}
                            onClick={() => handleSortSelect(option.value, option.label)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </Stack>
    );
};

export default SortMenu; //TODO - экспорт по дефолту только на pages
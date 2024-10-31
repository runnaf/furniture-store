import { useState } from 'react';
import { Button } from '../../../shared/ui/Button/Button'; 
import styles from './SortMenu.module.scss'; 
import arrow from '../../../shared/assets/svg/arrow-down.svg';
import { Stack } from '../../../shared/ui/Stack/Stack';

const SortMenu = ({ options, onSelect }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOptionClick = (value) => {
        onSelect(value);
        setIsMenuOpen(false); 
    };

    return (
        <Stack className={styles.sortContainer} gap='48' justify='justifyCenter' align='alignCenter'>
            <span>Сортировка: </span>
            <Button 
                outlined 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={styles.sortButton}
            >
                По умолчанию <img src={arrow} alt="arrow" />
            </Button>
            {isMenuOpen && (
                <div className={styles.dropdown}>
                    {options.map((option) => (
                        <div 
                            key={option.value} 
                            className={styles.option}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </Stack>
    );
};

export default SortMenu;
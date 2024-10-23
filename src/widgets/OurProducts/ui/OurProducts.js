import { Stack } from '../../../shared/ui/Stack/Stack';
import { Button } from '../../../shared/ui/Button/Button';
import { Card } from '../../../entities/Card/ui/Card';
import cardData from '../../../shared/libs/cardData';
import { HeaderSection } from '../../../shared/ui/HeaderSection/HeaderSection';
import styles from './OurProducts.module.scss';
import { buttons } from '../lib/data';
import { useState } from 'react';

export function OurProducts () {

    const [selectedFilter, setSelectedFilter] = useState(null);

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);        
    };

    return (
        <Stack className={styles.parenContainer}>
            <Stack 
                direction='column' 
                align='alignCenter' 
                gap='16' 
                className={styles.container}
            >
                <HeaderSection subTitle='Наша продукция'>
                    <span>Каталог товаров</span>
                </HeaderSection>

                <Stack gap='16' className={styles.buttonsContainer}>
                    {buttons.map(({ label, filter }) => (
                        <Button 
                            key={filter} 
                            color={selectedFilter === filter ? 'primary' : 'outlined'} 
                            onClick={() => handleFilterChange(filter)}
                        >
                            {label}
                        </Button>
                    ))}
                </Stack>
                <div className={styles.cardContainerWrapper}>
                    <Stack 
                        justify='justifyBetween'
                        className={styles.cardContainer}
                        gap='32'
                    >
                        {cardData.map((element) => (
                            <div className={styles.cardWrapper} key={element.id}>
                                <Card {...element} />
                            </div>
                        ))}
                    </Stack>
                </div>
            </Stack>
        </Stack>
    );
};

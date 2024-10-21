import { Stack } from '../../../shared/ui/Stack/Stack';
import { Button } from '../../../shared/ui/Button/Button';
import { Card } from '../../../entities/Card/ui/Card';
import cardData from '../../../shared/libs/cardData';
import styles from './OurProducts.module.scss';
import { HeaderSection } from '../../../shared/ui/HeaderSection/HeaderSection';

export function OurProducts () {
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
                    <Button color='outlined'>Все товары</Button>
                    <Button >Новинки</Button>
                    <Button color='outlined'>Популярное</Button>
                    <Button color='outlined'>Рекомендуемые</Button>
                </Stack>
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
            </Stack>
        </Stack>
    )
}
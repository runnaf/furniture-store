import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import { Button } from '../../../shared/ui/Button/Button';
import { Card } from '../../../entities/Card/ui/Card';
import cardData from '../../../shared/libs/cardData';
import styles from './OurProducts.module.scss';
import { HeaderSection } from '../../../shared/ui/HeaderSection/HeaderSection';

export function OurProducts () {
    return (
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
                <Button size='s' color='outlined'>Все товары</Button>
                <Button size='s'>Новинки</Button>
                <Button size='s' color='outlined'>Популярное</Button>
                <Button size='s' color='outlined'>Рекомендуемые</Button>
            </Stack>
            <Stack 
                justify='justifyBetween' max
                className={styles.cardContainer}
            >
                {cardData.map((element) => (
                    <Card key={element.id} {...element} />
                ))}
            </Stack>
        </Stack>
    )
}
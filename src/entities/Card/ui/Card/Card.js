import { Stack } from '../../../../shared/ui/Stack/Stack';
import { CardInfo } from '../CardInfo/CardInfo';
import { Timer } from '../../../Timers/ui/Timer';
import { getStyles } from '../../../../shared/libs/getStyles';
import styles from './Card.module.scss';
import { Text } from '../../../../shared/ui/Text/Text';

export const Card = ({ 
    id, color, rating, promotion,
    sub_categories, name, 
    price, sale_price, timer,
    description,
    view = 'general',// general | extended
}) => {

    const firstImage = color[0]?.images?.[2] || {};

    const cardContainer = getStyles(view === 'extended' 
        ? styles.extendedCard 
        : styles.generalCard, {}, [styles.cardBase]
    );


    return (
        <Stack 
            direction={view === 'extended' ? 'row' : 'column'} 
            gap='16' 
            className={styles.mainContainer}
        >
            <Stack 
                className={cardContainer}
            >
                <img src={firstImage.url} alt={firstImage.alt} loading='lazy' width='276'/>

                {promotion && (     
                        <Text className={styles.promotion}>{promotion}% off</Text>
                    )} 
                <Stack 
                    className={styles.cardTimer}
                >            
                    {timer && (
                        <Timer styleMode="timerCardContainer" endTime={timer}/>
                    )} 
                </Stack>
            </Stack>

            <CardInfo
                id={id}
                view={view}
                sub_categories={sub_categories}
                rating={rating}
                name={name}
                price={price}
                sale_price={sale_price}
                description={description}

            />
        </Stack>
    );
};

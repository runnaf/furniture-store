import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import { Button } from '../../../shared/ui/Button/Button';
import styles from './Card.module.scss';
import cart from '../../../shared/assets/svg/cart.svg';
import heart from '../../../shared/assets/svg/heart.svg';
import zoom from '../../../shared/assets/svg/zoom.svg';
import star from '../../../shared/assets/svg/star.svg';
import { Timer } from '../../Timers/ui/Timer';
import arrow from '../../../shared/assets/svg/arrowblack.svg';
import { LinkCustom } from '../../../shared/ui/LinkCustom/LinkCustom';

export function Card ({
    image,
    promotion,
    timer,
    category,
    name,
    price,
    newPrice,
    rating,
    view,// general | extended
    cardText,
}) {

    const cardView = 
        view === 'extended' ? styles.extendedCard : styles.generalCard;

    const categoryView = 
        view === 'extended' ? styles.extendedCategory : styles.generalCategory;

    return (
        <Stack 
            direction={view === 'extended' ? 'raw' : 'column'} 
            gap='16' 
            className={styles.mainContainer}
        >
            <Stack className={cardView}>
                <img src={image} alt='item' />

                <Stack justify='justifyBetween' className={styles.iconsContainer}>
                    {promotion > 0 && (
                        <Stack className={styles.promotion}>        
                            <Text className={styles.promotionText}>{promotion}% off</Text>
                        </Stack>
                    )}
                    <Stack direction='column' gap='8' className={styles.icons}>
                        <Button radius='circle'><img src={heart} alt='heart'/></Button>
                        <Button radius='circle'><img src={zoom} alt='zoom'/></Button>
                        <Button radius='circle'><img src={cart} alt='cart'/></Button>
                    </Stack>
                </Stack>

                <Stack className={styles.cardTimer}>            
                    {timer && (
                        <Timer styleMode="timerCardContainer" endTime={timer}/>
                    )} 
                </Stack>
            </Stack>

            <Stack 
                gap='8' 
                direction='column' 
                className={categoryView}
            >
                <Stack 
                    justify='justifyBetween'
                    className={styles.categoryContainer}
                >
                    <Text className={styles.category}>
                        {category}
                    </Text>
                    <Stack gap='8' className={styles.ratingContainer}>
                        <img src={star} alt='star' className={styles.star}></img>
                        <Text className={styles.rating}>{rating}</Text>
                    </Stack>
                </Stack>

                <p className={styles.cardName}>{name}</p>
                <p className={styles.newPrice}>{newPrice}р.<span className={styles.price}>{price}р.</span></p>
                
                {(view === 'extended') && (
                    <Stack direction='column' justify='justifyBetween' className={styles.extended}>
                        <Text className={styles.cardText}>{cardText}</Text>
                        <LinkCustom color='secondary' className={styles.shopButton}>
                            Магазин <img src={arrow} alt="arrow"/>
                        </LinkCustom>
                    </Stack>
                )}
            </Stack>        
        </Stack>
    );
};

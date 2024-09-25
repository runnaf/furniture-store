import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import { Button } from '../../../shared/ui/Button/Button';
import styles from './Card.module.scss';
import cart from '../../../shared/assets/svg/cart.svg';
import heart from '../../../shared/assets/svg/heart.svg';
import zoom from '../../../shared/assets/svg/zoom.svg';
import star from '../../../shared/assets/svg/star.svg';
import Timer from '../../timer/ui/Timer';

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
}) {

    const cardView = 
    view === 'extended' ? styles.extendedCard : 
    styles.generalCard;

    return (
        <Stack direction='column'>
        <Stack className={cardView}>
            <img src={image} alt='item'></img>
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
        <Stack direction='column'>
            <Stack justify='justifyBetween' className={styles.categoryContainer}>
                <Text className={styles.category}>{category}</Text>
                <Stack>
                    <img src={star} alt='star' className={styles.star}></img>
                    <Text className={styles.rating}>{rating}</Text>
                </Stack>
            </Stack>
            <p className={styles.cardName}>{name}</p>
            <p className={styles.newPrice}>${newPrice}<span className={styles.price}>${price}</span></p>
        </Stack>
        </Stack>
    )
}
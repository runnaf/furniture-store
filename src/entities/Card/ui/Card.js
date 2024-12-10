import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import { Button } from '../../../shared/ui/Button/Button';
import cart from '../../../shared/assets/svg/cart.svg';
import heart from '../../../shared/assets/svg/heart.svg';
import star from '../../../shared/assets/svg/star.svg';
import { Timer } from '../../Timers/ui/Timer';
import arrow from '../../../shared/assets/svg/arrowblack.svg'; //TODO - переделать на компонент
import { LinkCustom } from '../../../shared/ui/LinkCustom/LinkCustom';
import { getStyles } from '../../../shared/libs/getStyles';
import { ArrowIcon } from '../../Slider/ui/ArrowIcon/ArrowIcon';
import { getRouteProduct } from '../../../app/routes/lib/helper';
import styles from './Card.module.scss';
import { useModal } from '../../../shared/hooks/useModal';
import { ModalColor } from './ModalColor/ModalColor';
import { useAddInWishListMutation } from '../../../widgets/WishList/api/wishListApi';

//TODO карточка уже переросала в целый widgets, здесь 2 фичи - добавить в избранное и в корзину
export const Card = ({ 
    id, color, rating, 
    promotion, sub_categories, name, 
    price, sale_price, timer,
    short_description,
    view = 'general',// general | extended

}) => {
    const firstImage = color[0]?.images?.[2] || {};
    const [addInWishList] = useAddInWishListMutation();

    const cardContainer = getStyles(view === 'extended' 
        ? styles.extendedCard 
        : styles.generalCard, {}, [styles.cardBase]
    );

    const categoryView = getStyles(view === 'extended' 
        ? styles.extendedCategory 
        : '', {}, [styles.categoryBase]
    );

    const [changeColorModal, drawColorModal] = useModal();

    const handleAddToWishlist = async () => {
        const itemToAdd = {
            id,
            color,
            name,
            price,
            sale_price,
            short_description,
        };
        await addInWishList(itemToAdd);
        alert('Товар добавлен в избранное!');
    };

    //TODO карточку надо декомпозировать на компоненты
    return (
        <Stack 
            direction={view === 'extended' ? 'row' : 'column'} 
            gap='16' 
            className={styles.mainContainer}
        >
            {color && 
                drawColorModal(
                    <ModalColor 
                        colors={color} 
                        changeColorModal={changeColorModal} 
                        id={id}
                    />
                )}

            <Stack 
                className={cardContainer}
            >
                <img src={firstImage.url} alt={firstImage.alt} loading='lazy' width='276'/>

                <Stack 
                    justify='justifyBetween' 
                    className={styles.iconsContainer}
                >
                    {promotion && (
                        // TODO - здесь точно нужен STACK?
                        <Stack 
                            align='alignCenter'
                            className={styles.promotion}
                        >        
                            <Text className={styles.promotionText}>{promotion}% off</Text>
                        </Stack>
                    )} 
                    <Stack 
                        direction='column' 
                        gap='8' 
                        className={styles.icons}
                    >
                        <Button 
                            radius='circle' 
                            ariaLabel="Добавить в избранное"
                            onClick={handleAddToWishlist}
                        >
                            <img src={heart} alt='heart'/>
                        </Button>

                        <Button 
                            radius='circle' 
                            onClick={changeColorModal}
                            ariaLabel="Добавить в корзину"
                        >
                            <img src={cart} alt='cart'/>
                        </Button>
                    </Stack>
                </Stack>

                <Stack 
                    className={styles.cardTimer}
                >            
                    {timer && (
                        <Timer styleMode="timerCardContainer" endTime={timer}/>
                    )} 
                </Stack>
            </Stack>

            <Stack 
                gap='4' 
                direction='column' 
                className={categoryView}
            >
                <Stack 
                    align='alignCenter'
                    justify='justifyBetween'
                    className={styles.categoryContainer}
                >
                    <Text className={styles.category}>
                        {sub_categories}
                    </Text>
                    <Stack 
                        gap='8' 
                        align='alignCenter'
                        className={styles.ratingContainer}
                    >
                        <img src={star} alt='star' className={styles.star} />
                        <Text className={styles.rating}>{rating}</Text>
                    </Stack>
                </Stack>
                <Stack 
                    gap='12'
                    direction='column'
                    justify='justifyCenter'
                    className={styles.textContainer}
                >
                    <Text type='h3'>{name}</Text >
                    <Stack 
                        justify='justifyBetween'
                    >
                        <Stack
                            align="alignCenter"
                            gap='12'
                            className={styles.priceContainer}
                        >
                            {sale_price &&
                                <Text className={styles.price}>
                                    <del>{price.toLocaleString("ru-RU")} ₽</del>
                                </Text>
                            }
                            <Text>{price.toLocaleString("ru-RU")} ₽</Text>
                        </Stack>
                        {view === 'general' && 
                            <LinkCustom 
                                to={getRouteProduct(id)}
                                color='transparent'
                            >
                                <ArrowIcon/>
                            </LinkCustom>
                        }
                    </Stack>

                    {view === 'extended' && (
                    <Stack 
                        direction='column' 
                        justify='justifyBetween' 
                        className={styles.extended}
                    >
                        <Text className={styles.cardText}>{short_description}</Text>
                        <LinkCustom color='secondary' className={styles.shopButton}>
                            Магазин <img src={arrow} alt="arrow"/>
                        </LinkCustom>
                    </Stack>
                )}
                </Stack>
            </Stack>        
        </Stack>
    );
};

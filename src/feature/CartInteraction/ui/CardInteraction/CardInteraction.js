import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Button } from '../../../../shared/ui/Button/Button';
import cart from '../../../../shared/assets/svg/cart.svg';
import heart from '../../../../shared/assets/svg/heart.svg';
import { useModal } from '../../../../shared/hooks/useModal';
import { ModalColor } from '../../../../entities/Card/ui/ModalColor/ModalColor';
import { useAddInWishListMutation } from '../../../../widgets/WishList/api/wishListApi';
import showAlert from '../../../../widgets/Alert/Alert';
import { Waiting } from '../../../../shared/ui/Waiting/Waiting';
import { useNavigate } from 'react-router';
import { getRouteError404 } from '../../../../app/routes/lib/helper';
import styles from './CardInteraction.module.scss';


export const CardInteraction = ({ 
    _id, color, name, 
    price, sale_price, availability
}) => {

    const [addInWishList, { error, isLoading }] = useAddInWishListMutation();
    const image = color[0]?.images?.[2] || {};

    const [changeColorModal, drawColorModal] = useModal()
    const navigate = useNavigate()

    const handleAddToWishlist = async () => {
        try {
            await addInWishList({
                product_id: _id,
                image: {
                    alt: image.alt,
                    url: image.url
                },
                title: name,
                color: {
                    value: color[0].value,
                    label: color[0].label
                },
                price,
                sale_price,
                availability: {
                    value: availability.value,
                    label: availability.label
                }
            }).unwrap();
            
            showAlert('Товар добавлен в избранное!');
        } catch (error) {
            const errorMessage = error.message || 'Произошла ошибка при добавлении товара в избранное.';
            showAlert(errorMessage);
        }
    }

    if (error) {
        navigate(getRouteError404())
    }

    return (
        <Stack>
            {color && 
                drawColorModal(
                <ModalColor 
                    colors={color} 
                    changeColorModal={changeColorModal} 
                    id={_id}
                />
            )}

            <Stack 
                justify='justifyBetween' 
                className={styles.iconsContainer}
            >
                <Stack 
                    direction='column' 
                    gap='8' 
                    className={styles.icons}
                >
                    {isLoading ? <Waiting/> :
                    <Button 
                        radius='circle' 
                        aria-label="Добавить в избранное"
                        onClick={handleAddToWishlist}
                    >
                        <img src={heart} alt='heart'/>
                    </Button>}

                    <Button 
                        radius='circle' 
                        onClick={changeColorModal}
                        aria-label="Добавить в корзину"
                    >
                        <img src={cart} alt='cart'/>
                    </Button>
                </Stack>
            </Stack>
        </Stack>       
    );
};

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useGetWishListQuery } from "../api/wishListApi"
import { setWishlist, deleteItem, clearWishlist } from '../model/WishlistSlice';
import { Stack } from "../../../shared/ui/Stack/Stack"
import { Text } from "../../../shared/ui/Text/Text"
import { DeleteFilter } from '../../../shared/assets/svg/deleteFilter'
import { Button } from "../../../shared/ui/Button/Button"
import { useResize } from "../../../shared/hooks/useResize"
import styles from './Wishlist.module.scss'

const mockData = [
    {
        id: '1',
        imageUrl: 'url',
        productName: 'Стул',
        color: 'Зеленый',
        price: 19990,
        dateAdded: '2024-10-01',
        stockStatus: 'В наличии',
    },
    {
        id: '2',
        imageUrl: 'url',
        productName: 'Кровать',
        color: 'Белый',
        price: 19990,
        dateAdded: '2024-10-11',
        stockStatus: 'В наличии',
    },
]; // TO DO


export const WishList = () => {

    const dispatch = useDispatch();

    /* const { data, error, isLoading } = useGetWishListQuery({ limit: 10, page: 1 });
    console.log(data); */

    const data = mockData; 

    const isLoading = false;
    const error = null;

    const wishlist = useSelector(state => state.wishlist.wishlist);

    useEffect(() => {
        if (data) {
            dispatch(setWishlist(data));
        }
    }, [data, dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    const handleClear = () => {
        dispatch(clearWishlist());
    };

    const width = useResize();    

    if (isLoading) return <div>Loading</div>;
    if (error) return <div>Error loading wish list</div>;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                alert('Ссылка скопирована в буфер обмена!');
            })
            .catch(err => {
                console.error('Ошибка при копировании ссылки: ', err);
            });
    };

    
    return(
        <Stack direction='column' gap='32'>
           {width < 820 ? (
            <Stack direction='column' gap='48'>
                {wishlist?.map(item => (
                    <Stack direction='column' gap='24' key={item.id}>
                    <Stack                      
                     className={styles.mobileContainer}
                     gap='16' 
                     justify='justifyAround'
                     >                        
                        <img src={item.imageUrl} alt={item.productName} />
                        <Stack direction='column' gap='8'>
                        <Text>{item.productName}</Text>
                        <Text>Color: {item.color}</Text>
                        <Text>{item.price} руб.</Text>
                        <Text>{item.dateAdded}</Text>
                        <Text>{item.stockStatus}</Text>                        
                        </Stack>
                        <button onClick={() => handleDelete(item.id)} className={styles.deleteButton}> 
                            <DeleteFilter />
                        </button>
                    </Stack>
                    <Button className={styles.button}>В корзину</Button>
                    </Stack>
                ))}
                </Stack>
            ) : (
                <Stack justify='justifyCenter'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Date added</th>
                        <th>Stock status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {wishlist?.map(item => (
                        <tr key={item.id}>
                            <td>
                                <button onClick={() => handleDelete(item.id)} className={styles.deleteButton}> 
                                    <DeleteFilter />
                                </button>
                            </td>
                            <td>
                                <Stack gap='12'>
                                    <img src={item.imageUrl} alt={item.productName} />
                                    <Stack 
                                        direction='column' 
                                        justify='justifyCenter' 
                                        className={styles.itemDescription}
                                        gap='8'
                                    >
                                        <p>{item.productName}</p>
                                        <p>Color: {item.color}</p>
                                    </Stack>
                                </Stack>
                            </td>
                            <td>{item.price} руб.</td>
                            <td>{item.dateAdded}</td>
                            <td>{item.stockStatus}</td>
                            <td><Button >В корзину</Button></td>
                        </tr>
                    ))}
                </tbody>               
            </table>
            </Stack>
            )}
            <Stack justify='justifyBetween' className={styles.container} gap='16'>
                <Stack align='alignCenter' gap='24' className={styles.linkContainer}>
                    <Text>Ссылка на избранное:</Text>
                    <span>{window.location.href}</span>
                    <Button className={styles.button} onClick={copyToClipboard}>Копировать ссылку</Button>
                </Stack>
                <Stack gap='48' className={styles.buttonsContainer}>
                    <Button color='link' onClick={handleClear}>Отчистить</Button>
                    <Button className={styles.button}>Добавить все в корзину</Button>
                </Stack>
                </Stack>
        </Stack>
    )
}
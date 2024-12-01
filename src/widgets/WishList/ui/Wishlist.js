
import { useGetWishListQuery } from "../api/wishListApi"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { Text } from "../../../shared/ui/Text/Text"
import { DeleteFilter } from '../../../shared/assets/svg/deleteFilter'
import { Button } from "../../../shared/ui/Button/Button"
import { useResize } from "../../../shared/hooks/useResize"
import styles from './Wishlist.module.scss'


export const WishList = () => {

    const width = useResize(); 

    const data = [
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
    
    const isLoading = false;
    const error = null;

    /* const { data, error, isLoading } = useGetWishListQuery({ limit: 10, page: 1 }); */
   

    if (isLoading) return <div>Loading</div>;
    if (error) return <div>Error loading wish list</div>;

    
    return(
        <Stack direction='column' gap='32'>
           {width < 800 ? (
            <Stack direction='column' gap='48'>
                {data?.map(item => (
                    <Stack direction='column' gap='24'>
                    <Stack 
                    key={item.id} 
                    className={styles.mobileContainer}
                     gap='16' 
                     justify='justifyBetween'
                     >                        
                        <img src={item.imageUrl} alt={item.productName} />
                        <Stack direction='column' gap='8'>
                        <Text>{item.productName}</Text>
                        <Text>Color: {item.color}</Text>
                        <Text>{item.price} руб.</Text>
                        <Text>{item.dateAdded}</Text>
                        <Text>{item.stockStatus}</Text>                        
                        </Stack>
                        <DeleteFilter />
                    </Stack>
                    <Button className={styles.button}>В корзину</Button>
                    </Stack>
                ))}
                </Stack>
            ) : (
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
                    {data?.map(item => (
                        <tr key={item.id}>
                            <td><DeleteFilter /></td>
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
            )}
            <Stack justify='justifyBetween' className={styles.container}>
                <Stack align='alignCenter' gap='24' className={styles.linkContainer}>
                    <Text>Ссылка на избранное:</Text>
                    <span>link</span>
                    <Button className={styles.button}>Копировать ссылку</Button>
                </Stack>
                <Stack gap='48' className={styles.buttonsContainer}>
                    <Button color='link'>Отчистить</Button>
                    <Button className={styles.button}>Добавить все в корзину</Button>
                </Stack>
                </Stack>
        </Stack>
    )
}
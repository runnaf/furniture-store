import { useGetWishListQuery } from "../api/wishListApi"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { DeleteFilter } from '../../../shared/assets/svg/deleteFilter'
import { Button } from "../../../shared/ui/Button/Button"
import styles from './Wishlist.module.scss'


export const WishList = () => {

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
                            <td><Button>В корзину</Button></td>
                        </tr>
                    ))}
                </tbody>               
            </table>
            <Stack justify='justifyBetween'>
                <Stack align='alignCenter' gap='24'>
                    <p>Ссылка на избранное:</p>
                    <span>link</span>
                    <Button className={styles.button}>Копировать ссылку</Button>
                </Stack>
                <Stack gap='48'>
                    <Button color='link'>Отчистить</Button>
                    <Button className={styles.button}>Добавить все в корзину</Button>
                </Stack>
                </Stack>
        </Stack>
    )
}
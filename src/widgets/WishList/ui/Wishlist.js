import { useGetWishListQuery, useDeleteFromWishListMutation, useClearWishListMutation } from "../api/wishListApi"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { Text } from "../../../shared/ui/Text/Text"
import { DeleteFilter } from '../../../shared/assets/svg/deleteFilter'
import { Button } from "../../../shared/ui/Button/Button"
import { useResize } from "../../../shared/hooks/useResize"
import styles from './Wishlist.module.scss'

export const WishList = () => {

    const { data, error, isLoading } = useGetWishListQuery({ limit: 10, page: 1 });
    console.log(data);
    const [deleteFromWishList] = useDeleteFromWishListMutation();
    const [clearWishList] = useClearWishListMutation();

    const handleDelete = async (id) => {
        await deleteFromWishList({ id });
    };

    const handleClear = async () => {
        await clearWishList();
        alert('Избранное очищено!');
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
                {data?.map(item => (
                    <Stack direction='column' gap='24' key={item.id}>
                    <Stack                      
                     className={styles.mobileContainer}
                     gap='16' 
                     justify='justifyAround'
                     >                        
                        <img src={item.imageUrl} alt={item.name} />
                        <Stack direction='column' gap='8'>
                        <Text>{item.name}</Text>
                        <Text>Color: {item.color}</Text>
                        <Text>{item.price} руб.</Text>
                        <Text>{item.createdAt}</Text>
                        <Text>{item.availability}</Text>                        
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
                    {data?.map(item => (
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
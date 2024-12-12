import { useGetWishListQuery, useDeleteFromWishListMutation, useClearWishListMutation } from "../api/wishListApi"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { Text } from "../../../shared/ui/Text/Text"
import { DeleteFilter } from '../../../shared/assets/svg/deleteFilter'
import { Button } from "../../../shared/ui/Button/Button"
import { useResize } from "../../../shared/hooks/useResize"
import styles from './Wishlist.module.scss'
import { Copy } from "lucide-react"
import { WishListMobile } from "./WishListMobile/WishListMobile"
import { WishListTable } from "./WishListTable/WishListTable"

export const WishList = () => {

    const { data, error, isLoading } = useGetWishListQuery({ limit: 10, page: 1 });
    const [deleteFromWishList] = useDeleteFromWishListMutation();
    const [clearWishList] = useClearWishListMutation();

    const wishlist = data?.wishlist

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
        <section 
            className={styles.wishlist_container}
        >
            {width < 820 ? 
                <WishListMobile 
                    wishlist={wishlist}
                    onDelete={handleDelete}
                />
                : 
                <WishListTable 
                    wishlist={wishlist}
                    onDelete={handleDelete}
                />}
            <Stack 
                justify='justifyBetween' 
                className={styles.container} 
                gap='16'
                max
            >
                <Button className={styles.button} onClick={copyToClipboard}>
                    Копировать ссылку
                    <Copy />
                </Button>
                <Stack gap='48' className={styles.buttonsContainer}>
                    <Button color='link' onClick={handleClear}>Очистить</Button>
                    <Button className={styles.button}>Добавить все в корзину</Button>
                </Stack>
            </Stack>
        </section>
    )
}
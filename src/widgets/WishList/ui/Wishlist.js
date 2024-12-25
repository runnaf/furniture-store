import { useGetWishListQuery, useDeleteFromWishListMutation, useClearWishListMutation } from "../api/wishListApi"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { Button } from "../../../shared/ui/Button/Button"
import { useResize } from "../../../shared/hooks/useResize"
import styles from './Wishlist.module.scss'
import { Copy } from "lucide-react"
import { WishListMobile } from "./WishListMobile/WishListMobile"
import { WishListTable } from "./WishListTable/WishListTable"
import showAlert from "../../Alert/Alert"
import { Loader } from "../../../shared/ui/Loader/Loader"

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
        showAlert('Избранное очищено!');
    };

    const width = useResize();    

    if (isLoading) return <Loader/>
    if (error) return <div>Error loading wish list</div>//todo

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                showAlert('Ссылка скопирована в буфер обмена!');
            })
            .catch(err => {
                const errorMessage = err.message || 'Ошибка при копировании ссылки.';
                showAlert(errorMessage);
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
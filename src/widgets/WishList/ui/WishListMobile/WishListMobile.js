import { X } from "lucide-react"
import { getFormatDate } from "../../../../shared/libs/getFormatDate"
import { Button } from "../../../../shared/ui/Button/Button"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { Text } from "../../../../shared/ui/Text/Text"
import styles from './WishListMobile.module.scss'

export const WishListMobile = ({wishlist, onDelete}) => {

    console.log(wishlist)
    return(
        <Stack 
            max
            gap='32'
            className={styles.wishlist}
        >
            {wishlist.map(item => (
            <Stack
                direction='column' 
                gap='48'
                max
                className={styles.wishListMobile_container}
            >
                <Stack   
                    className={styles.mobileContainer}
                    gap='16' 
                    max
                >                        
                    <img src={item.image.url} alt={item.image.alt} />
                    <Stack direction='column' gap='8'>
                        <Text>{item.title}</Text>
                        <Text>Цвет: {item.color.label}</Text>
                        <Stack
                            direction='column'
                            gap='8'
                            className={styles.priceContainer}
                        >
                            {item.sale_price &&
                                <Text className={styles.price}>
                                    {item.sale_price.toLocaleString("ru-RU")} ₽
                                </Text>
                            }
                            <Text>{item.price.toLocaleString("ru-RU")} ₽</Text>
                        </Stack>
                        <Text>{getFormatDate(item.createdAt)}</Text>
                        <Text>{item.availability.label}</Text>                        
                    </Stack>
                    <Button 
                        color='transparent'
                        onClick={() => onDelete(item.product_id)} 
                        className={styles.deleteButton}
                    > 
                        <X/>
                    </Button>
                </Stack>
                <Button className={styles.button}>В корзину</Button>
            </Stack>))}
        </Stack>
    )
}
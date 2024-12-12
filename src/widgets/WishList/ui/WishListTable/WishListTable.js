import { X } from "lucide-react"
import { getFormatDate } from "../../../../shared/libs/getFormatDate"
import { Button } from "../../../../shared/ui/Button/Button"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { Text } from "../../../../shared/ui/Text/Text"
import styles from './WishListTable.module.scss'

export const WishListTable = ({wishlist, onDelete}) => {
    return(
        <Stack 
            max
        >
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Товар</th>
                        <th>Цена</th>
                        <th>Дата добавления</th>
                        <th>Наличие</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {wishlist.map(item => (
                        <tr key={item.product_id}>
                            <td>
                            <Button 
                                color='transparent'
                                onClick={() => onDelete(item.product_id)} 
                                className={styles.deleteButton}
                            > 
                                <X/>
                            </Button>
                            </td>
                            <td>
                                <Stack 
                                    gap='12'>
                                    <img src={item.image.url} alt={item.image.alt} />
                                    <Stack 
                                        direction='column' 
                                        justify='justifyCenter' 
                                        className={styles.itemDescription}
                                        gap='8'
                                    >
                                        <p>{item.title}</p>
                                    <Text>Цвет: {item.color.label}</Text>
                                    </Stack>
                                </Stack>
                            </td>
                            <td>
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
                            </td>
                            <td>{getFormatDate(item.createdAt)}</td>
                            <td>{item.availability.label}</td> 
                            <td><Button>В корзину</Button></td>
                        </tr>
                    ))}
                </tbody>               
            </table>
        </Stack>
    )
}
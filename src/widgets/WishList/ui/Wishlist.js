import { Stack } from "../../../shared/ui/Stack/Stack"
import { DeleteFilter } from '../../../shared/assets/svg/deleteFilter'
import { Button } from "../../../shared/ui/Button/Button"
import styles from './Wishlist.module.scss'

export const WishList = () => {
    return(
        <Stack>
            <table>
                <tr><th></th><th>Product</th><th>Price</th><th>Date added</th><th>Stock status</th><th></th></tr>
                <tr>
                    <td><DeleteFilter/></td>
                    <td><Stack gap='12'>
                        <img src='' alt='chair'/>
                        <Stack 
                        direction='column' 
                        justify='justifyCenter' 
                        className={styles.itemDescription}
                        gap='8'
                        >
                            <p>Chair</p><p>Color: blue</p>
                        </Stack>
                    </Stack></td>
                    <td>15000 руб.</td>
                    <td>21 April 2024</td>
                    <td>В наличие</td>
                    <td><Button>В корзину</Button></td>
                </tr>
            </table>
        </Stack>
    )
}
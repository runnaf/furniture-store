import { ProductAdd } from '../../../feature/ProductAdd/ui/ProductAdd'
import { Stack } from '../../../shared/ui/Stack/Stack'
import { Text } from '../../../shared/ui/Text/Text'
import styles from './ProductAdmin.module.scss'

export const ProductAdmin = () => {
    return(
        <Stack
            direction='column'
            align='alignCenter'
            justify='justifyCenter'
            gap='32'
            max
        >
            <Stack
                align='alignCenter'
                justify='justifyCenter'
                max
                className={styles.productAdmin}>
                <Text 
                    type="h2" 
                    size="md"
                >
                    Товары
                </Text>
            </Stack>
            <ProductAdd/>
        </Stack>
    )
}
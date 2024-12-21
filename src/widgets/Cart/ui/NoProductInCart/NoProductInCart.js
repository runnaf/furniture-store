import { getRouteShop } from "../../../../app/routes/lib/helper"
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { Text } from "../../../../shared/ui/Text/Text"
import styles from "./NoProductInCart.module.scss"

export const NoProductInCart = () => {
  return (
    <Stack direction="column" gap="32" align="alignCenter">
      <Text>В корзину еще не добавлены товары </Text>
      <LinkCustom className={styles.link} path={getRouteShop()}>Выберете товары здесь</LinkCustom>
    </Stack>
  )
}
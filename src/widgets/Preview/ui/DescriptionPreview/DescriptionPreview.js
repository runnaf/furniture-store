import { getRouteCategories, getRouteShop, getRouteSignin } from "../../../../app/routes/lib/helper";
import { circles } from "../../../../shared/assets/svg/circls";
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { TitleSecondary } from "../TitleSecondary/TitleSecondary";
import styles from "./DescriptionPreview.module.scss";

export const DescriptionPreview = () => {
    const authorized = false; //TODO

    return (
        <Stack className={styles.wrapper} direction="column" gap="32">
            <Stack className={styles.headerContainer} direction="column" gap="16">
                <TitleSecondary />
                <h1 >Познакомься с нашей <span>коллекцией мебели</span></h1>
                <Text>
                    Выбирайте из широкого ассортимента качественных товаров, созданных для дома с заботой о каждой детали.
                    Наши коллекции созданы для того, чтобы сделать ваш дом уютным и современным.
                </Text>
            </Stack>
            <Stack className={styles.linkContainer} align= "alignCenter" gap="16">
                <LinkCustom className={styles.linkShop} path={getRouteShop()}>
                    За покупками
                </LinkCustom>
                <LinkCustom className={styles.linkCategory} path={getRouteCategories()} color="secondary">
                    Просмотреть категории товаров
                </LinkCustom>
            </Stack>
            <Stack className={styles.description} gap="16">
                <Stack>
                    {circles()}
                <LinkCustom path={authorized ? "#": getRouteSignin()} color="yellow" radius="circle">
                    <VisuallyHidden>Оставить отзыв на выбранные товары</VisuallyHidden>
                </LinkCustom>
                </Stack>
                
                <Stack direction="column" gap="8">
                    <Text type="h3" size="s" className={styles.text}>
                        Рейтинг магазина 4.9
                    </Text>
                    <Text className={styles.text}>
                        Нам доверяют более 50 тысяч клиентов
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    )
}

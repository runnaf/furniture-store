import { getRouteCategories } from "../../../../app/routes/lib/helper";
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from "./SlideRoom.module.scss";

export const SlideRoom = ({room}) => {
    return (
        <Text type="li" className={styles.container}>
            <img src={room.image} alt={room.name} width="410" height="344"/>
            <Stack className={styles.description} justify="justifyBetween" gap="16">
                <Stack direction ="column" gap="16">
                    <Text type="h3">{room.name}</Text>
                    <Text>{`Более ${room.quantity} наименований`}</Text>
                </Stack>
                <LinkCustom path={getRouteCategories(room.category)} radius="circle">
                    <VisuallyHidden>{`ссылка для перехода на товары категории ${room.name}`}</VisuallyHidden>
                </LinkCustom>
            </Stack>
        </Text>
    )
}

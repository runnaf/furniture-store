import { getRouteCategories } from "../../../../app/routes/lib/helper";
import { clipIcon } from "../../../../shared/assets/svg/clipIcon";
import { LinkCustom } from "../../../../shared/ui/LinkCustom/LinkCustom";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from "./SlideRoom.module.scss";

export const SlideRoom = ({room}) => {
    return (
        <Stack className={styles.container} direction="column" gap="16">
            <img src={room.image} alt={room.name} />
            <Stack 
                className={styles.description} 
                align='alignCenter'
                justify="justifyBetween" gap="16"
            >
                <Stack direction ="column" gap="8">
                    <Text type="h3">{room.name}</Text>
                    <Text>{`Более ${room.quantity} наименований`}</Text>
                </Stack>
                <LinkCustom path={getRouteCategories(room.category)} radius="circle">
                    {clipIcon()}
                    <VisuallyHidden>{`ссылка для перехода на товары категории ${room.name}`}</VisuallyHidden>
                </LinkCustom>
            </Stack>
        </Stack>
    )
}

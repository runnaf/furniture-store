import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import styles from './SlideRoom.module.scss'

export const SlideRoom = ({room}) => {
    return (
        <Stack className={styles.container} direction ={'column'} gap={'32'}>
            <img className={styles.image} src={room.image} alt={room.name} width={'410'} height={'344'}/>
            <Stack className={styles.textContainer} direction ={'column'} gap={'16'}>
                <Text type={'h3'}>{room.name}</Text>
                <Text>{`Более ${room.quontity} наименований`}</Text>
            </Stack>
        </Stack>
    )
}
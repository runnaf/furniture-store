import { Stack } from "../../../../shared/ui/Stack/Stack";
import { SlideRoom } from "../SlideRoom/SlideRoom";
import styles from "./SlideRooms.module.scss";

export const SlideRooms = ({rooms}) => {
    return (
        <Stack className={styles.roomsContainer} gap="32" align="alignCenter" justify="justifyCenter">
            {
                rooms.map(room => 
                    <SlideRoom room = {room} key = {room.id}/>
                )
            }
        </Stack>
    )
}

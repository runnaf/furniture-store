import { SlideRoom } from "../SlideRoom/SlideRoom";
import styles from "./SlideRooms.module.scss";

export const SlideRooms = ({rooms}) => {
    return (
        <ul className={styles.roomsContainer}>
            {
                rooms.map(room => 
                    <SlideRoom room = {room} key = {room.name}/>
                )
            }
        </ul>
    )
}
import { ColorButton } from "../ColorButton/ColorButton";
import styles from "./ColorButtons.module.scss"

export const ColorButtons = ({colors, setCurrent, current}) => {
    return (
        <ul className={styles.container}>
            {
                colors.map((color) => (
                    <ColorButton key={color.value} color={color.value} setCurrent={setCurrent} current={current}/>
                ))
            }
        </ul>
    )
}

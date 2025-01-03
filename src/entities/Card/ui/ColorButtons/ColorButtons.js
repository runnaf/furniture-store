import { ColorButton } from "../ColorButton/ColorButton";
import styles from "./ColorButtons.module.scss"

export const ColorButtons = ({ colors, handleSelectColor, current }) => {
    return (
        <ul className={styles.container}>
            {
                colors.map((color) => (
                    <ColorButton 
                        key={color.value} 
                        color={color.value} 
                        handleSelectColor={handleSelectColor}
                        current={current}
                    />
                ))
            }
        </ul>
    )
}

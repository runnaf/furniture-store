import { useState } from "react";
import { ColorButton } from "../ColorButton/ColorButton";
import styles from "./ColorButtons.module.scss"

export const ColorButtons = ({colors, currentColor}) => {
    const [current, setCurrent] = useState(currentColor);
    const toggleState = (color) => {
        setCurrent(color)
    }
    return (
        <ul className={styles.container}>
            {
                colors.map((color) => (
                    <ColorButton key={color} color={color} toggleState={()=>toggleState(color)} current={current}/>
                ))
            }
        </ul>
    )
}
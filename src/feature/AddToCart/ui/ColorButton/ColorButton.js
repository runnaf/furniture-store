import styles from "./ColorButton.module.scss"
import { getStyles } from "../../../../shared/libs/getStyles";

export const ColorButton = ({color, toggleState, current, className}) => {

    const additional = [
        className,
        styles[color],
    ];

    const stylesName = getStyles(styles.button, true, additional)
    return (
        <li className={styles.containerButtonColor} style={{
            borderColor: current === color ? color : 'var(--stroke-color)',
        }}>
            <button value={color} id="color" className={stylesName} type="button" onClick={toggleState} style={{backgroundColor: color}}/>
        </li>
    )
}
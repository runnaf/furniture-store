import { getStyles } from "../../../../shared/libs/getStyles";
import { getColorForStyle } from "../../../../feature/AddToCart/lib/helper";
import styles from "./ColorButton.module.scss"

export const ColorButton = ({ color, handleSelectColor, current }) => {

    const additional = [
        styles[color],
    ];

    const mode = {
        [styles.current]:current === color
    };

    const stylesName = getStyles(styles.button, mode, additional);

    const handleColorChange = () => {
        handleSelectColor(color);
    };

    return (
        <li className={styles.containerButtonColor} style={{
            borderColor: current === color ? getColorForStyle(color) : 'var(--stroke-color)',
        }}>
            <button 
                value={color} 
                id="color" 
                className={stylesName} 
                type="button" 
                onClick={handleColorChange} 
                style={{ backgroundColor: getColorForStyle(color) }}
            />
        </li>
    )
}

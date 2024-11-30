import { useNavigate, useParams } from "react-router";
import { getRouteProduct } from "../../../../app/routes/lib/helper";
import { getStyles } from "../../../../shared/libs/getStyles";
import { getColorForStyle } from "../../lib/helper";
import styles from "./ColorButton.module.scss"

export const ColorButton = ({color, setCurrent, current, className}) => {
  const navigate = useNavigate();
  const {id} = useParams()

  const additional = [
        className,
        styles[color],
    ];

    const mode = {
        [styles.current] : current === color
    }

    const stylesName = getStyles(styles.button, mode, additional)

    const handelColorChange = (color) => {
      setCurrent(color);
      navigate(getRouteProduct(id, color))
    }
    return (
        <li className={styles.containerButtonColor} style={{
            borderColor: current === color ? getColorForStyle(color) : 'var(--stroke-color)',
        }}>
            <button value={color} id="color" className={stylesName} type="button" onClick={() => handelColorChange(color)} style={{backgroundColor: getColorForStyle(color)}}/>
        </li>
    )
}

import { arrowIcon } from "../../../../shared/assets/svg/arrowIcon";
import { Button } from "../../../../shared/ui/Button/Button";
import styles from './SideButtons.module.scss'

export const SideButtons = ({nextCard, prevCard}) => {
    return (
        <ul className={styles.container}>
            <li>
                <Button radius = 'circle' onClick = { prevCard }>
                    <span className="visually-hidden">Кнопка пролистывания слайдера назад</span>
                    {arrowIcon()}
                </Button>   
                </li>
            <li>
                <Button className = {styles.rightButton} color = 'secondary' onClick = { nextCard }>
                    <span className="visually-hidden">Кнопка пролистывания слайдера вперед</span>
                    {arrowIcon()}
                </Button>   
            </li>
        </ul>
    )
}
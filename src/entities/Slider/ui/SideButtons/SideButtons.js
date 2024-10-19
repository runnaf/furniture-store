import { arrowIcon } from "../../../../shared/assets/svg/arrowIcon";
import { Button } from "../../../../shared/ui/Button/Button";
import { Text } from "../../../../shared/ui/Text/Text";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from './SideButtons.module.scss'

export const SideButtons = ({nextCard, prevCard}) => {
    return (
        <ul className={styles.container}>
            <Text type="li">
                <Button radius = 'circle' onClick = { prevCard }>
                    <VisuallyHidden>Кнопка пролистывания слайдера назад</VisuallyHidden>
                    {arrowIcon()}
                </Button>   
            </Text>
            <Text type="li">
                <Button className = {styles.rightButton} color = 'secondary' onClick = { nextCard }>
                    <VisuallyHidden>Кнопка пролистывания слайдера вперед</VisuallyHidden>
                    {arrowIcon()}
                </Button>   
            </Text>
        </ul>
    )
}
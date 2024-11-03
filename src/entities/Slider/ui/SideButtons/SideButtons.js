import { Button } from "../../../../shared/ui/Button/Button";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { VisuallyHidden } from "../../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { ArrowIcon } from "../ArrowIcon/ArrowIcon";
import styles from './SideButtons.module.scss'

export const SideButtons = ({nextCard, prevCard}) => {
    return (
        <Stack className={styles.container} gap="16">
            <Button radius = 'circle' onClick = { prevCard }>
                <VisuallyHidden>Кнопка пролистывания слайдера назад</VisuallyHidden>
                <ArrowIcon />
            </Button>   
            <Button className = {styles.rightButton} color = 'secondary' onClick = { nextCard }>
                <VisuallyHidden>Кнопка пролистывания слайдера вперед</VisuallyHidden>
                <ArrowIcon />
            </Button>   
        </Stack>
    )
}
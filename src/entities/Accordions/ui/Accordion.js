import { useState } from "react";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";
import { getStyles } from "../../../shared/libs/getStyles";
import styles from './Accordion.module.scss';
import less from '../../../shared/assets/svg/less.svg'
import more from '../../../shared/assets/svg/more.svg'


export const Accordion = ({ question, answer, isSecond, styleMode }) => {

    const [isOpen, setIsOpen] = useState(isSecond || false);

    const handleClick = () => {
        setIsOpen(prev => !prev)
    }

    const mode = { [styleMode]: true }

    const additional = [
        styles[styleMode]
    ]

    const baseClass = styles.accordionContainer;

    const dynamicStyles = getStyles(
        isOpen ? styles.openAnswer : styles.closedAnswer,
        mode,
        additional
    )

    const styleClass = `${baseClass} ${dynamicStyles}`;

    return(
        <Stack direction="column" 
        onClick={handleClick}
        className={styleClass}
        >
            <Stack 
                justify='justifyBetween'
                align='alignCenter'
            >
                <Text size="s">{question}</Text>
                <img src={isOpen ? less : more} alt="more or less button"/>
            </Stack>
            <Stack className={isOpen ? styles.visible : styles.hidden}>
                <Text>{answer}</Text>
            </Stack>
        </Stack>
    )
}

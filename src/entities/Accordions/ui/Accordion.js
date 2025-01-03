import { useState } from "react";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { VisuallyHidden } from "../../../shared/ui/VisuallyHidden/VisuallyHidden";
import { Text } from "../../../shared/ui/Text/Text";
import { getStyles } from "../../../shared/libs/getStyles";
import { Minus, Plus } from "lucide-react";
import styles from './Accordion.module.scss';

export const Accordion = ({ question, answer, isSecond, styleMode }) => {

    const [isOpen, setIsOpen] = useState(isSecond || false);

    const handleClick = () => setIsOpen(prev => !prev);

    const dynamicStyles = getStyles(
        styles.accordionContainer, 

        {[styles.openAnswer]: isOpen,
        [styles.closedAnswer]: !isOpen},
        
        [styles[styleMode]]
    )

    return(
        <Stack 
            direction="column" 
            onClick={handleClick}
            className={dynamicStyles}
        >
            <Stack 
                justify='justifyBetween'
                align='alignCenter'
                className={styles.questionContainer}
            >
                <Text size="s">{question}</Text>
                {isOpen ? 
                <>
                    <Plus color="var(--yellow-color)"/>
                    <VisuallyHidden>Показать текст</VisuallyHidden>
                </>
                :
                <>
                    <Minus color="var(--green-color)"/>
                    <VisuallyHidden>Скрыть текст</VisuallyHidden>
                </>
                }
            </Stack>
            <Stack className={isOpen ? styles.visible : styles.hidden}>
                <Text>{answer}</Text>
            </Stack>
        </Stack>
    );
};

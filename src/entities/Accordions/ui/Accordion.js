import { useState } from "react";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";
import { getStyles } from "../../../shared/libs/getStyles";
import styles from './Accordion.module.scss';
import less from '../../../shared/assets/svg/less.svg'; //TODO сделать как компонент
import more from '../../../shared/assets/svg/more.svg'; //TODO сделать как компонент


export const Accordion = ({ question, answer, isSecond, styleMode }) => {

    const [isOpen, setIsOpen] = useState(isSecond || false);

    const handleClick = () => setIsOpen(prev => !prev);

    //TODO - какой-то мне не понятный синтаксис - это здесь точно надо?
    const mode = { [styleMode]: true }
    //TODO - как насчет такого варианта? вместо строки 30
    // [styles.openAnswer]: isOpen,
    // [styles.closedAnswer]: !isOpen,

    const additional = [
        styles[styleMode]
    ];

    const baseClass = styles.accordionContainer;

    const dynamicStyles = getStyles(
        //TODO - может быть перенести в mode, а здесь написать styles.accordionContainer?
        isOpen ? styles.openAnswer : styles.closedAnswer, 
        mode,
        additional
    );

    const styleClass = `${baseClass} ${dynamicStyles}`;

    return(
        <Stack 
            direction="column" 
            onClick={handleClick}
            className={styleClass}
        >
            <Stack 
                justify='justifyBetween'
                align='alignCenter'
                className={styles.questionContainer}
            >
                <Text size="s">{question}</Text>
                <img 
                    src={isOpen ? less : more} 
                    alt={isOpen ? 'сollapse' : 'уxpand'} //я здесь исправила текст, но если это будет svg, то лучше сделать как у Ирины кнопки
                />
            </Stack>
            <Stack className={isOpen ? styles.visible : styles.hidden}>
                <Text>{answer}</Text>
            </Stack>
        </Stack>
    );
};

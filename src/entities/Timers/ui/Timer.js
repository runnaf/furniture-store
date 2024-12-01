import { Stack } from '../../../shared/ui/Stack/Stack.js';
import styles from './Timer.module.scss'
import useCountdownTimer from "../lib/useCountdownTimer.js";
import React from "react";
import { getStyles } from '../../../shared/libs/getStyles.js';


export const Timer = ({ styleMode, endTime }) => {

    //styleMode: 'timerMainContainer', 'timerCardContainer', 'timerComingSoonContainer'
    //endTime='2024-12-31T20:59:59.000Z'
    
    const { timeItems } = useCountdownTimer(endTime)

    //TODO - опять не понятная мне структура)
    const mode = { [styleMode]: true }

    const additional = [
        styles[styleMode]
    ]; 

    const styleClass = getStyles(styles.timeContainer, mode, additional);

    //TODO - как насчет такого?
    // const separators = {
    //     timerMainContainer: ":",
    //     timerCardContainer: ":",
    //     timerComingSoonContainer: <hr />,
    // };
    
    // const renderSeparator = separators[styleMode] || null;

    const renderSeparator = () => {
        if (styleMode === 'timerMainContainer' || styleMode ==='timerCardContainer') {
            return <span>:</span>
        } else if (styleMode === 'timerComingSoonContainer') {
            return <hr />
        }  return null
    };

    //TODO - а если время закончилось, что будет? не показываем компонент?
    // if (!timeItems || timeItems.length === 0) return;

    return(
        <Stack 
            className={styleClass} 
            align='alignCenter' 
            justify='justifyCenter'
            aria-live="polite"
        >
            {timeItems.map((item, index) => (
                <React.Fragment key={index}> 
                    <Stack direction="column" align='alignCenter' justify='justifyCenter'>
                        <p>{item.value}</p>
                        <p>{item.label}</p>
                    </Stack>
                    {index < timeItems.length - 1 && renderSeparator()}
                </React.Fragment>
            ))}
        </Stack>
    )
}


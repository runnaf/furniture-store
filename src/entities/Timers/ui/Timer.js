import { Stack } from '../../../shared/ui/Stack/Stack.js';
import styles from './Timer.module.scss'
import useCountdownTimer from "../../../shared/hooks/useCountdownTimer.js";
import React from "react";
import { getStyles } from '../../../shared/libs/getStyles.js';


export const Timer = ({ styleMode, endTime }) => {

    //styleMode: 'timerMainContainer', 'timerCardContainer'
    //endTime='2024-12-31T20:59:59.000Z'
    
    const { timeItems, isRunning } = useCountdownTimer(endTime)

    const additional = [
        styles[styleMode]
    ]

    const styleClass = getStyles(styles.timeContainer, {}, additional);

    if (!timeItems || !isRunning) return null;

    return(
        <Stack 
            className={styleClass} 
            align='alignCenter' 
            justify='justifyCenter'
            aria-live="polite"
        >
            {timeItems.map((item, index) => (
                <React.Fragment key={index}> 
                    <Stack 
                        direction="column" 
                        align='alignCenter' 
                        justify='justifyCenter'
                    >
                        <p>{item.value}</p>
                        <p>{item.label}</p>
                    </Stack>
                    {index < timeItems.length - 1 && <span>:</span>}
                </React.Fragment>
            ))}
        </Stack>
    )
}


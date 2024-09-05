import { Stack } from '../../../shared/ui/Stack/Stack.js';
import styles from './Timer.module.scss'
import useCountdownTimer from "../lib/useCountdownTimer.js";
import React from "react";
import { getStyles } from '../../../shared/libs/getStyles.js';


const Timer = ({ styleMode, endTime }) => {

    const { timeItems } = useCountdownTimer(endTime)

    const mode = { [styleMode]: true }

    const additional = [
        styles[styleMode]
    ]; 
    const styleClass = getStyles(styles.timeContainer, mode, additional);

    const renderSeparator = () => {
        if (styleMode === 'timerMainContainer' || styleMode ==='timerCardContainer') {
            return <span>:</span>
        } else if (styleMode === 'timerComingSoonContainer') {
            return <hr />
        }  return null

    };

    return(
        <Stack className={styleClass} align='alignCenter' justify='justifyCenter'>
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

export default Timer;

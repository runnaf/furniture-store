import { getStyles } from "../../../../shared/libs/getStyles"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { Text } from "../../../../shared/ui/Text/Text";
import { Timer } from "../../../Timers/ui/Timer"
import styles from './CardImage.module.scss';

export const CardImage = ({
    view,
    firstImage,
    promotion,
    timer
}) => {

    const cardContainer = getStyles(view === 'extended' 
    ? styles.extendedCard 
    : styles.generalCard, {}, [styles.cardBase]
    )

    return(
        <Stack 
            className={cardContainer}
        >
            <img src={firstImage.url} alt={firstImage.alt} loading='lazy' width='276'/>

            {promotion && (     
                    <Text className={styles.promotion}>{promotion}% off</Text>
                )} 
            <Stack 
                className={styles.cardTimer}
            >            
                {timer && (
                    <Timer styleMode="timerCardContainer" endTime={timer}/>
                )} 
            </Stack>
        </Stack>
    )
}
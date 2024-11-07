import { Timer } from "../../../entities/Timers/ui/Timer"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { Stack } from "../../../shared/ui/Stack/Stack"
import chairSale from '../../../shared/assets/svg/chairSale.svg';
import points from '../../../shared/assets/svg/points.svg';
import arrowRight from '../../../shared/assets/svg/arrowright.svg'
import styles from './FlashSale.module.scss'
import { LinkCustom } from "../../../shared/ui/LinkCustom/LinkCustom";
import { getRouteShop } from "../../../app/routes/lib/helper";

export const FlashSale = () => {

    return(
        <Stack 
            justify='justifyCenter'
            align='alignCenter'
            className={styles.flashSale}
        >
            <Stack gap='32'
                align='alignCenter'
                justify='justifyCenter'
                className={styles.flashSaleContainer}
            >
                <Stack 
                    justify='justifyCenter'
                    align='alignCenter'
                >
                    <img src={points} alt="a cluster of dots"/>
                    <img src={points} alt="a cluster of dots"/>
                    <Stack gap='48'
                        direction="column"
                        justify='justifyCenter'
                        align='alignCenter'
                    >
                        <HeaderSection subTitle='Скидка 25% - предложение ограничено!'>
                            Супер <span> Скидки!</span> 
                        </HeaderSection>
                        <Timer styleMode='timerMainContainer' endTime='2024-12-31T20:59:59.000Z'/>
                        <LinkCustom to={getRouteShop()}>
                            Магазин
                            <img src={arrowRight} alt="arrow"/>
                        </LinkCustom>
                    </Stack>
                </Stack>
                <Stack gap='24'>
                    <Stack 
                        justify='justifyCenter'
                        align='alignCenter'
                    >
                        <Stack align='alignCenter'>
                            <img src={chairSale} alt="yellow chair"/>
                        </Stack>
                    </Stack>
                    <Stack
                        justify='justifyCenter'
                        align='alignCenter'
                    >
                        <Stack align='alignCenter'>
                            <img src={chairSale} alt="yellow chair"/>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

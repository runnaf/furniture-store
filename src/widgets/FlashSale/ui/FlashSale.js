import { Timer } from "../../../entities/Timers/ui/Timer"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { Stack } from "../../../shared/ui/Stack/Stack"
import chairSale from '../../../shared/assets/svg/chairSale.svg';
import arrowRight from '../../../shared/assets/svg/arrowright.svg'
import { LinkCustom } from "../../../shared/ui/LinkCustom/LinkCustom";
import { getRouteShop } from "../../../app/routes/lib/helper";
import { Points } from "../../../shared/assets/svg/points";
import { VisuallyHidden } from "../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from './FlashSale.module.scss'

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
                    <>
                    <Points/>
                    <VisuallyHidden>Декоративный элемент</VisuallyHidden>
                    </>
                    <>
                    <Points/>
                    <VisuallyHidden>Декоративный элемент</VisuallyHidden>
                    </>
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

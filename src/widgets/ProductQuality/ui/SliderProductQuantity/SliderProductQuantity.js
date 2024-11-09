import chairSale from '../../../../shared/assets/svg/chairSale.svg';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import styles from "./SliderProductQuantity.module.scss";

export const SliderProductQuantity = () => {
    return (
        <Stack gap='24' className={styles.container}>
            <Stack justify='justifyCenter' align='alignCenter'>
                <Stack align='alignCenter'>
                    <img src={chairSale} alt="yellow chair"/>
                </Stack>
            </Stack>
            <Stack justify='justifyCenter' align='alignCenter'>
                <Stack align='alignCenter'>
                    <img src={chairSale} alt="yellow chair"/>
                </Stack>
            </Stack>
        </Stack>
    )
}

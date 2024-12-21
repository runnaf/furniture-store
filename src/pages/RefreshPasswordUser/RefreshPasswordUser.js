import { useResize } from "../../shared/hooks/useResize";
import { Stack } from "../../shared/ui/Stack/Stack";
import { SliderForAuthorization } from "../../widgets/SliderForAuthorization/ui/SliderForAuthorization";
import { RefreshPassword } from "../../feature/RefreshPassword/RefreshPassword/RefreshPassword";
import styles from './RefreshPasswordUser.module.scss';

const DESKTOP_WIDTH = 1024

const RefreshPasswordUser = () => {
    const width = useResize()
    const isDesktop = width > DESKTOP_WIDTH

    return (
        <Stack 
            className={styles.refresh_password} 
            justify='justifyBetween' 
            align='alignCenter'
            gap='75'
        >
            <RefreshPassword />
            {isDesktop && <SliderForAuthorization />}
        </Stack>
    )
}

export default RefreshPasswordUser;
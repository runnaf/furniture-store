import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './SectionTitle.module.scss'
import points from '../../../shared/assets/svg/points.svg';

export  const SectionTitle = ({ children }) => {
    return(
        <Stack direction="column"
        justify='justifyCenter'
        align='alignCenter'
        gap='16'
        className={styles.sectionTitleContainer}>
            <img src={points} alt="a cluster of dots"/>
            <img src={points} alt="a cluster of dots"/>
            {children}
        </Stack>
    )
}

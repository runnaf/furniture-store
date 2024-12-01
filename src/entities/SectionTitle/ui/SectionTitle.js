import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './SectionTitle.module.scss'
import points from '../../../shared/assets/svg/points.svg'; //TODO - сделать компонент

export  const SectionTitle = ({ children }) => {
    return(
        <Stack 
            justify='justifyCenter'
            align='alignCenter'
            className={styles.sectionTitleContainer}
        >
            <Stack 
                direction="column"
                justify='justifyCenter'
                align='alignCenter'
                gap='16'
            >
                <img src={points} alt="a cluster of dots"/>
                <img src={points} alt="a cluster of dots"/>
                {children}
            </Stack>
        </Stack>
    )
}

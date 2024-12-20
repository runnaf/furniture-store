import { Stack } from "../../../shared/ui/Stack/Stack";
import { Points } from "../../../shared/assets/svg/points";
import { VisuallyHidden } from "../../../shared/ui/VisuallyHidden/VisuallyHidden";
import styles from './SectionTitle.module.scss'

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
                <>
                <Points/>
                <VisuallyHidden>Декоративный элемент</VisuallyHidden>
                </>
                <>
                <Points/>
                <VisuallyHidden>Декоративный элемент</VisuallyHidden>
                </>
                {children}
            </Stack>
        </Stack>
    )
}

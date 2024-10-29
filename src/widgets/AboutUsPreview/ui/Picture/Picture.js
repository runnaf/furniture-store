import { Stack } from "../../../../shared/ui/Stack/Stack";
import picture1 from "../../../../shared/assets/blogPoster/country_house.jpg";
import picture2 from "../../../../shared/assets/blogPoster/garden_furniture.jpg";
import picture3 from "../../../../shared/assets/blogPoster/harmony.jpg";
import styles from "./Picture.module.scss"

export const Picture = () => {
    return (
        <Stack className={styles.container}>
            <img src={picture1} width="585" height="560" alt="мебель представленная в нашем магазине"/>
            <Stack direction="column" className={styles.container}>
                <img src={picture2} width="584" height="264" alt="мебель представленная в нашем магазине"/>
                <img src={picture3} width="584" height="264" alt="мебель представленная в нашем магазине"/>
            </Stack>
        </Stack>
    )
}
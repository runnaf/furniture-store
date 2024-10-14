import { Button } from "../../../shared/ui/Button/Button"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { Input } from "../../../shared/ui/Input/Input"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { Text } from "../../../shared/ui/Text/Text"
import styles from './NewsLetter.module.scss'
import points from '../../../shared/assets/svg/points.svg';
import sms from '../../../shared/assets/svg/sms.svg';

export const NewsLetter = () => {
    return(
        <Stack className={styles.newsLetterContainer}
        align='alignCenter'
        justify='justifyCenter'>
            <img src={points} alt="a cluster of dots"/>
            <img src={points} alt="a cluster of dots"/>
            <Stack direction='column'
            align='alignCenter'
            justify='justifyCenter'
            gap='48'>
                <Stack direction='column'
                align='alignCenter'
                justify='justifyCenter'
                gap='24'>
                    <HeaderSection subTitle='Рассылка новостей'>
                        <span> Оформите подписку</span> на наши новости
                    </HeaderSection>
                    <Text type="p">{`Получите скидку 20% на свой первый заказ, просто подписавшись на наши новости`}</Text>
                </Stack>
                <Stack
                align='alignCenter'
                justify='justifyCenter'
                gap='16'>
                    <Stack justify='justifyCenter'
                    align='alignCenter'>
                        <img src={sms} alt='envelope'/>
                        <Input placeholder="Введите свою почту"/>
                    </Stack>
                    <Button color="secondary">
                        {'Оформить'}
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    ) 
}
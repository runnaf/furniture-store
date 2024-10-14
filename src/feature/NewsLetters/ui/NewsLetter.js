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
                    <HeaderSection title={`Subscribe to Our Newsletter to Get`} children={` Updates to Our Latest Collection`} subTitle={`Our Newsletter`}/>
                    <Text type="p">{`Get 20% off on your first order just by subscribing to our newsletter`}</Text>
                </Stack>
                <Stack
                align='alignCenter'
                justify='justifyCenter'
                gap='16'>
                    <Stack justify='justifyCenter'
                    align='alignCenter'>
                        <img src={sms} alt='envelope'/>
                        <Input placeholder="Enter Email Address"/>
                    </Stack>
                    <Button color="secondary">
                        {'Subscribe'}
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    ) 
}
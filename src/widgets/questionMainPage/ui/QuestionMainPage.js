import Accordion from "../../../entities/accordion/ui/Accordion"
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './QuestionMainPage.module.scss';
import questionData from '../lib/data'

const QuestionMainPage = () => {

    return(
        <Stack className={styles.questionMainPageContainer}
        direction="column"
        justify='justifyCenter'
        align='alignCenter'
        gap='50'>
            <Stack direction="column"
            justify='justifyCenter'
            align='alignCenter'
            gap='24'>
                <h3>Faqs</h3>
                <h2>Question? Look here.</h2>
            </Stack>
            <Stack direction="column" gap='16'>
                {questionData.map((item, index) => (
                    <Accordion key={index} question={item.question} answer={item.answer} isSecond={index === 1}/>
                ))}
            </Stack>
        </Stack>
    )
}

export default QuestionMainPage; 
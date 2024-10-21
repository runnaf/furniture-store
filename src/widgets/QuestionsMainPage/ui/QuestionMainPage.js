import { Accordion } from "../../../entities/Accordions/ui/Accordion"
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './QuestionMainPage.module.scss';
import questionData from '../lib/data'
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection";

export const QuestionMainPage = () => {

    return(
        <Stack 
            className={styles.questionMainPageContainer}
            direction="column"
            justify='justifyCenter'
            align='alignCenter'
            gap='32'
        >
            <HeaderSection subTitle='Есть вопрос?'>
            Найдите <span> ответ здесь</span>
            </HeaderSection>

            <Stack direction="column" gap='16'>
                {questionData.map((item, index) => (
                    <Accordion 
                        key={index} 
                        question={item.question} 
                        answer={item.answer} 
                        isSecond={index === 1}
                    />
                ))}
            </Stack>
        </Stack>
    )
}

import { Accordion } from "../../../../entities/Accordions/ui/Accordion"
import { Stack } from "../../../../shared/ui/Stack/Stack";
import questionData from '../../lib/data'
import { HeaderSection } from "../../../../shared/ui/HeaderSection/HeaderSection"
import styles from './QuestionMainPage.module.scss';

export const QuestionMainPage = () => {

    return(
        <Stack 
            className={styles.questionMainPageContainer}
        >
            <Stack             
            direction="column"
            justify='justifyCenter'
            align='alignCenter'
            gap='32'>
                <HeaderSection subTitle='Есть вопрос?'>
                    Найдите <span> ответ здесь</span>
                </HeaderSection>

                <Stack direction="column" gap='16' max>
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
        </Stack>
    )
}

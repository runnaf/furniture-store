import { useState } from "react"
import { Accordion } from "../../../../entities/Accordions/ui/Accordion"
import { Button } from "../../../../shared/ui/Button/Button"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { dataFAQ } from "../../lib/dataFAQ"
import styles from './FAQ.module.scss'

export const FAQ = () => {

    const [activeTab, setActiveTab] = useState('Общая информация')

    const handleChangeData = (tab) => {
        setActiveTab(tab);
    }

    const activeData = dataFAQ.find(item => item.title === activeTab)

    return(
        <Stack 
            className={styles.faq_container}
            justify='justifyBetween'
        >
            <Stack 
                className={styles.button_container}
            >
                <Stack
                    direction="column" 
                    gap='16'
                >
                    {dataFAQ.map((tab, index) => (
                    <Button 
                        key={index}
                        outlined radius="radius-m"
                        onClick={() => {
                            handleChangeData(tab.title)
                        }}
                        className={activeTab === tab.title ? styles.active : ''}
                    >
                        {tab.title}
                    </Button>
                    ))}
                </Stack>
            </Stack>
            <Stack 
                className={styles.accordion_container}
                direction="column"
                gap='16'
            >
                {activeData.content.map((faq, index) => (
                    <Accordion 
                    key={index} 
                    question={faq.question}
                    answer={faq.answer} 
                    isSecond={index === 1}
                    styleMode='pageFAQ'
                    />
                ))}
            </Stack>
        </Stack>
    )
}
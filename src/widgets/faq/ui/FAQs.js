import { useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './FAQs.module.scss';
import faqData from '../lib/data'
import Accordion from "../../../entities/accordion/ui/Accordion";

const FAQs = () => {
    const [activeTab, setActiveTab] = useState('General Information')

    const handleChangeData = (tab) => {
        setActiveTab(tab)
    }

    const activeData = faqData.find(item => item.title === activeTab)

    return(
        <Stack direction="column"
        justify='justifyCenter'
        align='alignCenter'
        className={styles.faqsContainer}
        gap='75'>
            <Stack direction="column"
            justify='justifyCenter'
            align='alignCenter'
            gap='16'>
                <h1>FAQs</h1>
                <h3>Home / FAQs</h3>
            </Stack>
            <Stack justify='justifyBetween'>
                <Stack direction="column" gap='16'>
                    {faqData.map((tab, index) => (
                    <Button key={index}
                    outlined radius="radius-m"
                    onClick={() => handleChangeData(tab.title)}
                    className={activeTab === tab.title ? styles.active : ''}>
                        {tab.title}
                    </Button>
                    ))}
                </Stack>
                <Stack direction="column"
                gap='16'>
                    {activeData.content.map((faq, index) => (
                        <Accordion key={index} question={faq.question}
                        answer={faq.answer} isSecond={index === 1}
                        styleMode='pageFAQ'/>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default FAQs;
import { useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './FAQs.module.scss';
import faqData from '../lib/data'
import Accordion from "../../../entities/Accordion/ui/Accordion";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";

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
            <SectionTitle>
                <h1>FAQs</h1>
                <h3>Home / FAQs</h3>
            </SectionTitle>
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
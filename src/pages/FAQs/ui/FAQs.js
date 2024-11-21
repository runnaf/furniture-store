import { useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './FAQs.module.scss';
import faqData from '../lib/data'
import { Accordion } from "../../../entities/Accordions/ui/Accordion";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { routes } from "../../../app/routes/lib/data";
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages";

export const FAQs = () => {
    const [activeTab, setActiveTab] = useState('Общая информация')

    const handleChangeData = (tab) => {
        setActiveTab(tab);
    }

    const activeData = faqData.find(item => item.title === activeTab)

    return(
        <Stack 
            direction="column"
            justify='justifyCenter'
            align='alignCenter'
            className={styles.faqsContainer}
            gap='75'
        >
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>
            <Stack justify='justifyBetween'>
                <Stack direction="column" gap='16'>
                    {faqData.map((tab, index) => (
                    <Button key={index}
                    outlined radius="radius-m"
                    onClick={() => {
                        handleChangeData(tab.title)
                    }}
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
            <Advantages />
        </Stack>
    )
}

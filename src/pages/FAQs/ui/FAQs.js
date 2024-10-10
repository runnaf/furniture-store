import { useEffect, useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './FAQs.module.scss';
import faqData from '../lib/data'
import { Accordion } from "../../../entities/Accordions/ui/Accordion";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { useSwipeable } from "react-swipeable";
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { routes } from "../../../app/routes/lib/data";

export const FAQs = () => {
    const [activeTab, setActiveTab] = useState('Общая информация')
    const [offset, setOffset] = useState(0); 
    const [isMobile, setIsMobile] = useState(window.innerWidth < 820);

    const containerWidth = 1230; 
    const buttonWidth = 400; 
    const maxOffset = -(faqData.length * buttonWidth - containerWidth) 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 820);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChangeData = (tab) => {
        setActiveTab(tab);
    };

    const handleButtonClick = (index) => {
        if (isMobile) {
            const newOffset = Math.min(Math.max(-(index * buttonWidth), maxOffset), 0)
            setOffset(newOffset)
        }
    };
    
    const handleSwipeLeft = () => {
        setOffset(prev => {
            const newOffset = prev - 150 
            return Math.max(newOffset, maxOffset) 
        })
    }
    
    const handleSwipeRight = () => {
        setOffset(prev => {
            const newOffset = prev + 150 
            return Math.min(newOffset, 0)
        })
    }
    
    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    })

    const activeData = faqData.find(item => item.title === activeTab)

    return(
        <Stack direction="column"
        justify='justifyCenter'
        align='alignCenter'
        className={styles.faqsContainer}
        gap='75'
        {...handlers}>
            <SectionTitle>
                <Breadcrumbs routes={routes}/>
            </SectionTitle>
            <Stack justify='justifyBetween'>
                <Stack direction="column" gap='16'
                style={{ transform: `translateX(${offset}px)`, transition: isMobile ? 'transform 0.3s ease' : 'none' }}>
                    {faqData.map((tab, index) => (
                    <Button key={index}
                    outlined radius="radius-m"
                    onClick={() => {
                        handleChangeData(tab.title)
                        handleButtonClick(index)
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
        </Stack>
    )
}

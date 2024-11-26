import { useState } from 'react';
import { TabItem } from '../TabItem/TabItem';
import { DescriptionTab } from '../DescriptionTab/DescriptionTab';
import { AdditionalInfoTab } from '../AdditionalInfoTab/AdditionalInfoTab';
import { ReviewTab } from '../ReviewTab/ReviewTab/ReviewTab';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { tabs } from '../../lib/data';
import styles from './Tabs.module.scss';

export const Tabs = ({data}) => {
    const [activeTab, setActiveTab] = useState('description');
    const { description } = data;
    const { list, paragraphs} = description

    return (
        <Stack gap='32' justify='column' className={styles.tabsContainer}>
            <Stack className={styles.wrapper}>
                <Stack gap='48' align="justifyCenter" className={styles.tabHeaders}>
                    {tabs.map((tab) => (
                        <TabItem
                            key={tab.id}
                            id={tab.id}
                            label={tab.label}
                            isActive={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        />
                    ))}
                </Stack>
            </Stack>
            
            <Stack justify='column' className={styles.tabContent}>
                {activeTab === 'description' &&
                    <DescriptionTab
                        list={list}
                        paragraphs={paragraphs}
                    />}
                {activeTab === 'additional' && <AdditionalInfoTab data={data} />}
                {activeTab === 'review' && <ReviewTab />}
            </Stack>
        </Stack>
    );
};

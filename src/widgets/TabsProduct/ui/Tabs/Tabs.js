import { useState } from 'react';
import styles from './Tabs.module.scss';
import { TabItem } from '../TabItem/TabItem';
import { DescriptionTab } from '../DescriptionTab/DescriptionTab';
import { AdditionalInfoTab } from '../AdditionalInfoTab/AdditionalInfoTab';
import { ReviewTab } from '../ReviewTab/ReviewTab/ReviewTab';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { tabs, descriptionData, additionalInfoData, reviewData } from '../../lib/data';


export const Tabs = () => {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <Stack gap='32' justify='column' className={styles.tabsContainer}>
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
            <Stack justify='column' className={styles.tabContent}>
                {activeTab === 'description' &&
                    <DescriptionTab
                        descriptionText={descriptionData.descriptionText}
                        listItems={descriptionData.listItems}
                    />}
                {activeTab === 'additional' && <AdditionalInfoTab additionalInfo={additionalInfoData} />}
                {activeTab === 'review' && <ReviewTab 
                    ratingScore={reviewData.ratingScore}
                    totalReviews={reviewData.totalReviews}
                    ratingBreakdown={reviewData.ratingBreakdown}
                    reviews={reviewData.reviews} />}
            </Stack>
        </Stack>
    );
};

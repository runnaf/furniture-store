import styles from './DescriptionTab.module.scss';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../shared/ui/Text/Text';
import { TabsIcon } from '../TabsIcon/TabsIcon';

export const DescriptionTab = ({ descriptionText, listItems }) => (
    <Stack gap='24' justify='column' className={styles.description}>
        <Text className={styles.text}>{descriptionText}</Text>
        <ul>
            {listItems.map((item, index) => (
                <li key={index}>
                    <TabsIcon />
                    {item}
                </li>
            ))}
        </ul>
    </Stack>
);

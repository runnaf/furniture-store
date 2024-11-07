import styles from './DescriptionTab.module.scss';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../shared/ui/Text/Text';

export const DescriptionTab = ({ descriptionText, listItems }) => (
    <Stack gap='24' justify='column' className={styles.description}>
        <Text>{descriptionText}</Text>
        <ul>
            {listItems.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    </Stack>
);

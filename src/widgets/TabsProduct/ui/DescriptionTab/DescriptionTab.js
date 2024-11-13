import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../shared/ui/Text/Text';
import styles from './DescriptionTab.module.scss';

export const DescriptionTab = ({ list, paragraphs }) => (
    <Stack gap='24' justify='column' className={styles.description}>
        <Text>{list}</Text>
        <ul>
            {paragraphs.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    </Stack>
);

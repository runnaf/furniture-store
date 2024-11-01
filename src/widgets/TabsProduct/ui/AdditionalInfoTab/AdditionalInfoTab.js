
import styles from './AdditionalInfoTab.module.scss';
import { Stack } from '../../../../shared/ui/Stack/Stack';

export const AdditionalInfoTab = ({ additionalInfo }) => (
    <Stack direction='column' className={styles.tableContainer}>
        <table className={styles.additionalInfo}>
            <thead>
                <tr>
                    <th>Характеристика</th>
                    <th>Описание</th>
                </tr>
            </thead>
            <tbody>
                {additionalInfo.map((item, index) => (
                    <tr key={index}>
                        <td>{item.feature}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Stack>
);

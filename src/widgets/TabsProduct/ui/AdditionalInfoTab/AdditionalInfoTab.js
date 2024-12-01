import { Stack } from '../../../../shared/ui/Stack/Stack';
import { getLabelsAsString } from '../../lib/helpers';
import styles from './AdditionalInfoTab.module.scss';

export const AdditionalInfoTab = ({ data }) => {
    const {information} = data;
    const {brand, dimensions, material, color, weight} = information
    const colors = color.join(', ')
    const materials = getLabelsAsString(material);

    return (
        <Stack direction='column' className={styles.tableContainer}>
            <table className={styles.additionalInfo}>
                <thead>
                    <tr>
                        <th>Характеристика</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Материал сиденья</td>
                        <td>{materials}</td>
                    </tr>
                    <tr>
                        <td>Цвет</td>                        
                        <td>{colors}</td>
                    </tr>
                    <tr>
                        <td>Вес</td>
                        <td>{weight}</td>
                    </tr>
                    <tr>
                        <td>Размеры</td>
                        <td>{dimensions}</td>
                    </tr>
                    <tr>
                        <td>Бренд</td>
                        <td>{brand}</td>
                    </tr>
                </tbody>
            </table>
        </Stack>
    )
}

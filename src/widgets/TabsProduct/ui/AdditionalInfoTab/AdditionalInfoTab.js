
import { Stack } from '../../../../shared/ui/Stack/Stack';
import styles from './AdditionalInfoTab.module.scss';

export const AdditionalInfoTab = ({ data }) => {
    const {information} = data;
    const {brand, color, colors, dimensions, material, weight} = information

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
                        <td>{material}</td>
                    </tr>
                    <tr>
                        <td>Цвет</td>                        
                        <td>{colors ? '' : color}</td>
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

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './DropdownMenu.module.scss';
import { getRouteCategories } from '../../../../app/routes/lib/helper';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../shared/ui/Text/Text';
import { Button } from '../../../../shared/ui/Button/Button';


export const DropdownMenu = ({ menuData, onClose }) => {
    return (
        <Stack justify="justifyAround" className={styles.dropdown}>
            {menuData.map((column, index) => (
                <Stack gap="24" direction="column" key={index} className={styles.column}>
                    <Text type="h3" size="xs">{column.title}</Text>
                    <ul>
                        {column.subCategories.map((subCategory, index) => (
                            <li key={index}>
                                <Link to={getRouteCategories(subCategory.params)} onClick={onClose} className={styles.link}>
                                    {subCategory.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Stack>
            ))}
            <Stack direction="column" className={styles.offer}>
                <Text type="p" size="xs">- Последние предложения</Text>
                <Text type="h3" size="xs">Скидка 15% на мебель</Text>
                <HashLink to="/#today-deals" onClick={onClose} smooth className={styles.hashlink}>
                <Button radius="rounded" size="xss" color="primary" className={styles.btn}>Купить сейчас</Button>
                </HashLink>
            </Stack>
        </Stack>
    );
};

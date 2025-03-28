import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from '../../../../shared/ui/Text/Text';
import { Checkbox } from '../../../../shared/ui/Checkbox/Checkbox';
import styles from './FiltersItem.module.scss';

export function FiltersItem({ title, filters, selectedFilters, onChange}) {
    return (
        <Stack direction='column' gap='16'>
            <Text className={styles.subtitle}>{title}</Text>
            <Stack direction='column' gap='12'>           
            {filters.map(item => (
                <Checkbox
                    key={item.value}
                    name={item.value}
                    checked={selectedFilters[item.value]}
                    onChange={(name, checked) => {                    
                        onChange({ ...selectedFilters, [name]: checked });                        
                    }}
                    image={item.image}
                >
                    {item.label}
                </Checkbox>
            ))}
            </Stack> 
        </Stack>
    );
}

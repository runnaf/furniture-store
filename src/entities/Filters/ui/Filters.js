import { Stack } from '../../../shared/ui/Stack/Stack';
import { Text } from '../../../shared/ui/Text/Text';
import styles from '../../Filters/ui/Filters.module.scss';

export const Filters = ({ title, options, type, onChange }) => (
    <Stack direction='column' gap='12'>
        <Text className={styles.subtitle}>{title}</Text>
        {options.map(option => (
            <label key={option.value}>
                {type === 'checkbox' ? (
                    <input 
                        type='checkbox' 
                        value={option.value} 
                        onChange={() => onChange(type, option.value)} 
                    /> 
                ) : (
                    <input 
                        type='radio' 
                        name={title} 
                        value={option.value} 
                        onChange={() => onChange(type, option.value)} 
                    />
                )}
                {option.label}
            </label>
        ))}
    </Stack>
);

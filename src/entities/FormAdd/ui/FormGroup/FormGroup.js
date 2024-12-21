import { Button } from "../../../../shared/ui/Button/Button";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { FormItem } from "../FormItem/FormItem";
import styles from './FormGroup.module.scss'

export const FormGroup = ({ field, register, reset, trigger, errors }) => {

    const handleSave = async (fields) => {
        const fieldNames = fields.map(subField => subField.name)
        const isValid = await trigger(fieldNames)
        if (isValid) {
            const resetValues = fieldNames.reduce((acc, name) => {
                acc[name] = '';
                return acc
            }, {})
    
            reset(resetValues)
        }
    }

    return (
        <Stack 
            direction="column"
            className={styles.formGroup_container}
        >
            {field.fields && field.fields.length ?
            (<Stack
                direction='column'
                gap='8'
                max
                className={styles.formGroup}
            >
                <label>{field.label}</label>
                {field.fields.map((subField) => (
                    <FormItem 
                    key={subField.id} 
                    field={subField} 
                    register={register} 
                    reset={reset}
                    trigger={trigger} 
                    errors={errors} 
                />
                ))}
                <Button
                    type='button'
                    onClick={() => handleSave(field.fields)}
                >
                    Сохранить элемент
                </Button>

                <ul>
                    <li></li>
                </ul>
            </Stack>) : (
                
            <FormItem 
                field={field} 
                register={register} 
                reset={reset}
                trigger={trigger} 
                errors={errors} 
            />
            )}
        </Stack>
    )
}
import { Button } from "../../../../shared/ui/Button/Button";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { FormItem } from "../FormItem/FormItem";
import styles from './FormGroup.module.scss'

export const FormGroup = ({ field, register, errors }) => {
    return (
        <Stack key={field.id} direction="column"
        className={styles.formGroup_container}>
            <Stack 
                direction="column"
                
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
                        <FormItem field={subField} register={register} errors={errors} />
                    ))}
                    <Button>Сохранить элемент</Button>
                </Stack>) : (
                    
                <FormItem field={field} register={register} errors={errors} />
                )}
            </Stack>
        </Stack>
    );
};
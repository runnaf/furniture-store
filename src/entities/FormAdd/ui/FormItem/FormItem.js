import { Button } from "../../../../shared/ui/Button/Button"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { FormField } from "../FormField/FormField"
import styles from './FormItem.module.scss'


export const FormItem = ({ field, register, reset, trigger, errors }) => {

    const isLongText = field.minLength && field.minLength >= 30;

    const handleSave = async (field_name) => {
        const isValid = await trigger(field_name)
        if (isValid) {
            reset({ [field_name]: '' })
        }
    }

    return (
        <Stack 
            direction="column" 
            className={styles.formItem_container}
        >
            <FormField
                isLongText={isLongText}
                field={field}
                register={register}
                errors={errors}
            />
            {field.isGroup && (
                <Button
                    type='button'
                    onClick={() => handleSave(field.name)}
                >
                    Сохранить элемент
                </Button>
            )}

            <ul>
                <li></li>
            </ul>
        </Stack>
    )
}



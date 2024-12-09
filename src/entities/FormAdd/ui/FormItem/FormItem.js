import { Button } from "../../../../shared/ui/Button/Button"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { FormField } from "../FormField/FormField"
import styles from './FormItem.module.scss'


export const FormItem = ({ field, register, errors }) => {
    const isLongText = field.minLength && field.minLength >= 30;

    return (
        <Stack 
            direction="column" 
            key={field.id}
            className={styles.formItem_container}
        >
            <FormField
                isLongText={isLongText}
                field={field}
                register={register}
                errors={errors}
            />
            {field.isGroup && (
                <Button>Сохранить элемент</Button>
            )}
        </Stack>
    )
}



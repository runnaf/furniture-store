import { Input } from "../../../../shared/ui/Input/Input";
import { Textarea } from "../../../../shared/ui/Textarea/Textarea";
import { data } from "../../../../shared/libs/validation/errors/data"
import { valid } from "../../../../shared/libs/validation/getValidate"

export const FormField = ({ isLongText, field, register, errors }) => {

    const { label, name, 
    required, value,
    messages, minLength,
    placeholder } = field


    const sharedProps = {
        label: label,
        name: name,
        register: register,
        options: {
            ...(required && { required: data.required }),
            ...(value && {
                pattern: {
                    value: valid[value],
                    message: data.errors[messages],
                },
            }),
            ...(field.minLength && {
                minLength: {
                    value: minLength,
                    message: data.errors[messages],
                },
            }),
        },
        placeholder: placeholder,
        error: errors[name],
    };

    return isLongText ? (
        <Textarea {...sharedProps} />
    ) : (
        <Input {...sharedProps} />
    )
}
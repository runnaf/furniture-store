import { FormProvider, useForm } from "react-hook-form"
import { data } from "../../shared/libs/validation/errors/data"
import { valid } from "../../shared/libs/validation/getValidate"
import { Button } from "../../shared/ui/Button/Button"
import { Input } from "../../shared/ui/Input/Input"
import { Stack } from "../../shared/ui/Stack/Stack"
import styles from './SearchAdmin.module.scss'

export const SearchAdmin = ({ placeholder, button_name}) => {
    const methods = useForm()
    const {register, reset, handleSubmit, formState: { errors }} = methods

    const onSubmit = () => {
        reset()
    }

    return(
        <FormProvider {...methods}>
            <Stack 
                className={styles.search_container}>
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.form_container}
                >
                    <Input
                        name='search'
                        register={register}
                        placeholder={placeholder}
                        options={{
                            required: data.required,
                            pattern: {
                                value: valid.idRegex,
                                message: data.errors.validURL
                            }
                        }}
                        error={errors.search}
                        />
                    <Button
                        type='submit'
                    >
                        {button_name}
                    </Button>
                </form>
            </Stack>
        </FormProvider>
    )
}
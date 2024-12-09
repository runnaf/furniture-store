import React from "react"
import { useFormContext } from "react-hook-form"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { FormGroup } from "../FormGroup/FormGroup"
import { FormItem } from "../FormItem/FormItem"
import styles from './FormAdd.module.scss'

export const FormAdd = ({input}) => {

    const {
        register,
        formState: { errors },
    } = useFormContext()


    return(
        <Stack 
            direction="column"
            className={styles.formAdd_container}
        >
        {input.fields && input.fields.length ? (
            <Stack
                direction='column'
                gap='8'
            >
                <label>{input.label}</label>
                <Stack direction="column">
                    {input.fields.map((field) => (
                        <FormGroup field={field} register={register} errors={errors} />
                    ))}
                </Stack>
            </Stack>
        ) : (
            <FormItem field={input} register={register} errors={errors} />
        )}
    </Stack>
    )
}

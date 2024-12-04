import { FormProvider, useForm } from "react-hook-form"
import { FormAdd } from "../../../entities/FormAdd/ui/FormAdd/FormAdd"
import { Button } from "../../../shared/ui/Button/Button"
import { Stack } from "../../../shared/ui/Stack/Stack"
import ImageCropper from "../../ImageCropper/ui/ImageCropper"
import { dataInputProduct } from "../lib/data"
import styles from './ProductAdd.module.scss'


export const ProductAdd = () => {

    const methods = useForm({ mode: "onSubmit" })
    const { reset, handleSubmit } = methods;

    const onSubmit = () => {
        reset()
    }

    return(
        <Stack
            justify='justifyCenter'
            gap='32'
            max
            className={styles.newsBlogAdd}
        >
            <Stack 
                direction='column'
            >
                <ImageCropper aspectRatio={3 / 4} height={400}/>
            </Stack>
            <FormProvider {...methods}>
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Stack
                        direction='column'
                        gap='16'
                        className={styles.form_add}
                        max
                    >
                        {dataInputProduct.map(input => (
                            <FormAdd key={input.id} input={input}/>
                        ))}
                    </Stack>

                    <Button type='submit'>
                        Сохранить товар
                    </Button>
                </form>
            </FormProvider>
        </Stack>
    )
}
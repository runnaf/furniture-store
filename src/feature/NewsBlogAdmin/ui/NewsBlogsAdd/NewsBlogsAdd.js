import { FormProvider, useForm } from "react-hook-form"
import { FormAdd } from "../../../../entities/FormAdd/ui/FormAdd/FormAdd"
import { Button } from "../../../../shared/ui/Button/Button"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import ImageCropper from "../../../ImageCropper/ui/ImageCropper"
import { dataInputBlog } from "../../lib/data"
import styles from './NewsBlogsAdd.module.scss'


export const NewsBlogsAdd = () => {

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
                gap='32'
                direction='column'
            >
                <ImageCropper aspectRatio={6 / 4}/>
                <ImageCropper aspectRatio={1 / 1}/>
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
                        {dataInputBlog.map(input => (
                            <FormAdd  key={input.id} input={input}/>
                        ))}
                    </Stack>

                    <Button type='submit'>
                        Сохранить
                    </Button>
                </form>
            </FormProvider>
        </Stack>
    )
}
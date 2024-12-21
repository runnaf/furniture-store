import { FormProvider, useForm } from "react-hook-form"
import { FormAdd } from "../../../../entities/FormAdd/ui/FormAdd/FormAdd"
import { ImageCropper } from "../../../../feature/ImageCropper/ui/ImageCropper"
import { SearchAdmin } from "../../../../feature/SearchAdmin/SearchAdmin"
import { Button } from "../../../../shared/ui/Button/Button"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { Text } from "../../../../shared/ui/Text/Text"
import { dataInputBlog } from "../../lib/data"
import styles from './NewsBlogsAdmin.module.scss'

export const NewsBlogsAdmin = () => {

    const methods = useForm({ mode: "onSubmit" })
    const { reset, handleSubmit } = methods;

    const onSubmit = () => {
        reset()
    }

    return(
        <Stack
            direction='column'
            align='alignCenter'
            justify='justifyCenter'
            max
            gap='32'
        >
            <Stack
                align='alignCenter'
                justify='justifyCenter'
                max
                className={styles.newsBlogsAdmin}>
                <Text 
                    type="h2" 
                    size="md"
                >
                    Новости и блог
                </Text>
            </Stack>
            <SearchAdmin
                placeholder={'Введите id новости'}
                button_name={'Поиск новости'}
            />
            <FormProvider {...methods}>
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.form}
                >
                    <Stack
                        gap='32'
                        max
                        className={styles.form_container}
                    >
                        <Stack 
                            gap='32'
                            direction='column'
                            max
                        >
                            <ImageCropper id={2} aspectRatio={6 / 4} product={false} formMethods={methods}/>
                            <ImageCropper id={3} aspectRatio={1 / 1} product={false} formMethods={methods}/>
                        </Stack>
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
                    </Stack>
                    <Button 
                        type='submit'
                        color="secondary"
                        className={styles.save}
                    >
                        Сохранить
                    </Button>
                </form>
            </FormProvider>
        </Stack>
    )
}
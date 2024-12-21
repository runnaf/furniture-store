import { FormProvider, useForm } from 'react-hook-form'
import { FormAdd } from '../../../../entities/FormAdd/ui/FormAdd/FormAdd'
import { ImageCropper } from '../../../../feature/ImageCropper/ui/ImageCropper'
import { SearchAdmin } from '../../../../feature/SearchAdmin/SearchAdmin'
import { dataInputProduct } from '../../lib/data'
import { Button } from '../../../../shared/ui/Button/Button'
import { Stack } from '../../../../shared/ui/Stack/Stack'
import { Text } from '../../../../shared/ui/Text/Text'
import styles from './ProductAdmin.module.scss'

export const ProductAdmin = () => {

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
            gap='32'
            max
        >
            <Stack
                align='alignCenter'
                justify='justifyCenter'
                max
                className={styles.productAdmin}>
                <Text 
                    type="h2" 
                    size="md"
                >
                    Товары
                </Text>
            </Stack>
            <SearchAdmin
                placeholder={'Введите id товара'}
                button_name={'Поиск товара'}
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
                        <ImageCropper 
                            id={1}
                            aspectRatio={3 / 4} 
                            height={400} 
                            product={true}
                            formMethods={methods}
                        />
                        <Stack
                            direction='column'
                            gap='32'
                            className={styles.form_add}
                            max
                        >
                            {dataInputProduct.map(input => (
                                <FormAdd key={input.id} input={input}/>
                            ))}
                        </Stack>
                    </Stack>

                    <Button 
                        type='submit'
                        color="secondary"
                        className={styles.save}
                    >
                        Сохранить товар
                    </Button>
                </form>
            </FormProvider>
        </Stack>
    )
}
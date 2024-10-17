import { Button } from "../../../shared/ui/Button/Button"
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection"
import { Input } from "../../../shared/ui/Input/Input"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { Text } from "../../../shared/ui/Text/Text"
import styles from './NewsLetter.module.scss'
import points from '../../../shared/assets/svg/points.svg';
import sms from '../../../shared/assets/svg/sms.svg';
import { FormProvider, useForm } from "react-hook-form";
import { data } from '../../../shared/libs/validation/errors/data';
import { emailRegex } from "../../../shared/libs/validation/getValidate"

export const NewsLetter = () => {

    const methods = useForm({mode: "onSubmit" })
    const { register, handleSubmit, setValue, reset, formState: { errors } } = methods;

    const onSubmit = () => {
        reset()
    }

    return(
        <Stack className={styles.newsLetterContainer}
        align='alignCenter'
        justify='justifyCenter'>
            <img src={points} alt="a cluster of dots"/>
            <img src={points} alt="a cluster of dots"/>
            <Stack direction='column'
            align='alignCenter'
            justify='justifyCenter'
            gap='48'>
                <Stack direction='column'
                align='alignCenter'
                justify='justifyCenter'
                gap='24'>
                    <HeaderSection subTitle='Рассылка новостей'>
                        <span> Оформите подписку</span> на наши новости
                    </HeaderSection>
                    <Text type="p">Получите скидку 20% на свой первый заказ, просто подписавшись на наши новости</Text>
                </Stack>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <img src={sms} alt='envelope'/>
                        <Input 
                        name="email"
                        register={register}
                        setValue={setValue}
                        options={{
                            required: data.required,
                            pattern: {
                                value: emailRegex,
                                message: data.errors.validEmail
                            }
                        }}
                        placeholder="Введите свою почту"
                        error={errors.email}/>
                        <Button color="secondary">
                            Оформить
                        </Button>
                        
                    </form>
                </FormProvider>
            </Stack>
        </Stack>
    ) 
}
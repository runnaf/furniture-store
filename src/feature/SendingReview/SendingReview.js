import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { data } from '../../shared/libs/validation/errors/data'
import styles from "./SendingReview.module.scss";
import { Input } from '../../shared/ui/Input/Input';
import { emailRegex, textRegex } from '../../shared/libs/validation/getValidate';
import { Button } from '../../shared/ui/Button/Button';
import { Stack } from '../../shared/ui/Stack/Stack';

export const SendingReview = () => {
    const methods = useForm({mode:"onSubmit"});
    const { register, handleSubmit, reset, setValue, formState: { errors } } = methods;

    const onSubmit = () => {
        reset()
    }

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Stack className={styles.wrapper} gap='32' justify="justifyBetween">
                    <Input name="name"
                            label={<>Имя <sup>*</sup></>}
                            register={register}
                            setValue={setValue}
                            options={{
                                required: 'Это поле обязательно к заполнению',
                                pattern: {
                                        value: textRegex,
                                        message: data.errors.validName
                                    },
                                minLength: {
                                    value: 2,
                                    message: data.errors.textName
                                }
                            }}
                            placeholder="Введите свое имя"
                            error={errors.name}
                    />
                    <Input name="email"
                            label={<>Email <sup>*</sup></>}
                            register={register}
                            setValue={setValue}
                            options={{
                                required: 'Это поле обязательно к заполнению',
                                pattern: {
                                    value: emailRegex,
                                    message: data.errors.validEmail
                                }
                            }}
                            placeholder="Введите свою почту"
                            error={errors.email}
                    />
                </Stack>
                <Stack gap="12" direction="column" className={styles.rating}>
                    <legend>Оцените товар <sup>*</sup></legend>
                    <Stack gap="8">
                        <input type="radio" id="star-5" name="rating" value="5" {...register('rating', { required: 'Обязательно проставьте рейтинг' })} error={errors.rating}/>
                        <label htmlFor="star-5" title="Оценка «5»"/>	
                        <input type="radio" id="star-4" name="rating" value="4" />
                        <label htmlFor="star-4" title="Оценка «4»" />   
                        <input type="radio" id="star-3" name="rating" value="3" />
                        <label htmlFor="star-3" title="Оценка «3»" /> 
                        <input type="radio" id="star-2" name="rating" value="2" />
                        <label htmlFor="star-2" title="Оценка «2»" />   
                        <input type="radio" id="star-1" name="rating" value="1" />
                        <label htmlFor="star-1" title="Оценка «1»" />
                    </Stack>
                    <p>{errors.rating ? errors.rating.message : ''}</p>
                </Stack>
                <Input name="title"
                        label={<>Добавьте заголовок отзыва <sup>*</sup></>}
                        register={register}
                        setValue={setValue}
                        options={{
                            required: 'Это поле обязательно к заполнению',
                            minLength: {
                                value: 8,
                                message: data.errors.passwordTooShort
                            }
                        }}
                        placeholder="Введите заголовок отзыва"
                        error={errors.title}
                />

                <Stack direction="column" gap="12">
                    <label htmlFor="text">Оставьте Ваш отзыв <sup>*</sup></label>
                    <textarea 
                        className={ errors.textarea ? styles.error : ''}
                        id="textarea"
                        {...register('textarea', { required: 'Это поле обязательно к заполнению', minLength: {
                                    value: 30,
                                    message: data.errors.textareaLength
                                } })}
                        placeholder='Оставьте отзыв здесь'
                    />
                    <p>{errors.textarea ? errors.textarea.message : ''}</p>
                </Stack>

                <Button className={styles.sendingReview} type="submit">Отправить отзыв</Button>
            </form>
        </FormProvider>
    );
};

import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReactSlider from 'react-slider';
import { numberRegex } from "../../../../shared/libs/validation/getValidate";
import { Input } from "../../../../shared/ui/Input/Input";
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { Text } from "../../../../shared/ui/Text/Text";
import styles from './FilterPrice.module.scss'

export const FilterPrice = ({ onHandleChange, temporaryFilters }) => {

    const methods = useForm({ mode: 'onChange' })
    const { register, setValue, watch } = methods

    const minPrice = watch('minPrice', temporaryFilters.price ? temporaryFilters.price[0] : 0)
    const maxPrice = watch('maxPrice', temporaryFilters.price ? temporaryFilters.price[1] : 100000)

    //TODO useCallback надо обернуть, функции передаются в пропсах
    const handleMinInputChange = (e) => {
        const inputValue = Math.min(100000, Math.max(0, Number(e.target.value)))
        setValue('minPrice', inputValue)
        onHandleChange('price', [inputValue, maxPrice])
    };

    const handleMaxInputChange = (e) => {
        const inputValue = Math.min(100000, Math.max(0, Number(e.target.value)))
        setValue('maxPrice', inputValue)
        onHandleChange('price', [minPrice, inputValue])
    };

    const handleSliderChange = useCallback(
        ([newMinPrice, newMaxPrice]) => {
            setValue('minPrice', newMinPrice)
            setValue('maxPrice', newMaxPrice)
            onHandleChange('price', [newMinPrice, newMaxPrice])
        },
        [onHandleChange, setValue]
    );
    return(
        <Stack 
            className={styles.priceContainer} 
            direction="column" 
            gap="16"
        >
            <Text className={styles.subtitle}>Цена</Text>
            <FormProvider {...methods}>
                <form>
                    <Stack 
                        align="alignCenter" 
                        justify="justifyBetween" 
                        gap="16" 
                        className={styles.inputContainer}
                    >
                        <Input
                            name="minPrices"
                            register={register}
                            onChange={handleMinInputChange}
                            value={temporaryFilters.price[0]}
                            placeholder="0"
                            options={{
                                pattern: {
                                    value: numberRegex,
                                }
                            }}
                        />
                        <Input
                            name="maxPrice"
                            register={register}
                            onChange={handleMaxInputChange}
                            value={temporaryFilters.price[1]}
                            placeholder="100 000"
                            options={{
                                pattern: {
                                    value: numberRegex,
                                }
                            }}
                        />
                    </Stack>
                    <ReactSlider
                        min={0}
                        max={100000}
                        step={10}
                        value={temporaryFilters.price || [0, 100000]}
                        onChange={handleSliderChange}
                        renderThumb={(props) => {
                            const { key, ...restProps } = props;
                            return (
                                <div 
                                    {...restProps} 
                                    aria-labelledby="price-slider"
                                    key={key} 
                                    className={styles.thumb} 
                                />
                            )
                        }}
                        renderTrack={(props, state) => {
                            const { key, ...restProps } = props;
                            return (
                                <div
                                    {...restProps}
                                    key={key}
                                    className={`${styles.track} ${state.index === 1 ? styles.trackMax : styles.trackMin}`}
                                />
                            );
                        }}
                        className={styles.slider}
                    />
                </form>
            </FormProvider>
        </Stack>
    )
}
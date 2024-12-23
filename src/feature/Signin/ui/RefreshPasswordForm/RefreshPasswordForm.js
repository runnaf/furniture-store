import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { Link } from "react-router-dom"
import { getRouteMain } from "../../../../app/routes/lib/helper"
import { LogoIcon } from "../../../../shared/assets/svg/navbarIcons"
import { HidePasswordIcon, ShowPasswordIcon } from "../../../../shared/assets/svg/passwordIcons"
import { data } from "../../../../shared/libs/validation/errors/data"
import { Button } from "../../../../shared/ui/Button/Button"
import { Input } from "../../../../shared/ui/Input/Input"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { Text } from "../../../../shared/ui/Text/Text"
import styles from './RefreshPasswordForm.module.scss'

export const RefreshPasswordForm = ({ onSubmit }) => {
    const [showPassword, setShowPassword] = useState(false)
    const { register, setValue, handleSubmit, formState: { errors } } = useFormContext()
    const PasswordToggleIcon = showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />

    return(
        <form 
            className={styles.form} 
            onSubmit={handleSubmit(onSubmit)}
        >
            <Link to={getRouteMain()}>
                <LogoIcon />
            </Link>
            <Stack 
                direction="column" 
                gap='32'
            >
                <Text 
                    type="h2" 
                    size="xl"
                >
                    Обновление пароля
                </Text>
                <Stack 
                    direction='column' 
                    className={styles.password}
                >
                    <Input
                        label="Пароль"
                        type={!showPassword ? 'password' : 'text'}
                        placeholder=" введите пароль"
                        name='newPassword'
                        register={register}
                        setValue={setValue}
                        options={{
                            required: data.required,
                        }}
                        error={errors.newPassword}
                    />
                    <button 
                        type='button' 
                        className={styles.password_btn}
                            onClick={() => setShowPassword(!showPassword)}
                    >
                        {PasswordToggleIcon}
                    </button>
                </Stack>
                <Button 
                    type="submit" 
                    className={styles.submitBtn}
                >
                    Отправить
                </Button>
            </Stack>
        </form>
    )
}
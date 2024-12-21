import { SectionTitle } from "../../entities/SectionTitle/ui/SectionTitle"
import { RefreshPassword } from "../../feature/AuthAdmin/ui/RefreshPassword/RefreshPassword"
import { Stack } from "../../shared/ui/Stack/Stack"

const RefreshPasswordPage = () => {
    return(
        <Stack
            direction='column'
        >
            <SectionTitle>
                <h1>
                    Обновление пароля
                </h1>
            </SectionTitle>
            <RefreshPassword/>
        </Stack>
    )
}

export default RefreshPasswordPage
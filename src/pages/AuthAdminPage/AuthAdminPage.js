import { SectionTitle } from "../../entities/SectionTitle/ui/SectionTitle"
import { AuthAdminMain } from "../../feature/AuthAdmin/ui/AuthAdminMain/AuthAdminMain"
import { Stack } from "../../shared/ui/Stack/Stack";

const AuthAdminPage = () => {
    return(
        <Stack
            direction='column'
        >
            <SectionTitle>
                <h1>Авторизация администратора</h1>
            </SectionTitle>
            <AuthAdminMain/>
        </Stack>
    )
}

export default AuthAdminPage;
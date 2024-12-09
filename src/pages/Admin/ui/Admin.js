import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { NewsBlogsAdmin } from "../../../feature/NewsBlogAdmin/ui/NewsBlogsAdmin/NewsBlogsAdmin";
import { Stack } from "../../../shared/ui/Stack/Stack"
import { ProductAdmin } from "../../../widgets/ProductAdmin/ui/ProductAdmin";


const Admin = () => {
    return(
        <Stack
            gap='75'
            direction='column'
        >
            <SectionTitle>
                <h1>Aдмин-панель</h1>
            </SectionTitle>

            <ProductAdmin/>
            <NewsBlogsAdmin/>
        </Stack>
    )
}

export default Admin;
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { NewsBlogsAdmin } from "../../../widgets/NewsBlogAdmin/ui/NewsBlogAdmin/NewsBlogsAdmin";
import { Stack } from "../../../shared/ui/Stack/Stack"
import { ProductAdmin } from "../../../widgets/ProductAdmin/ui/ProductAdmin/ProductAdmin";
import { ReviewsAdmin } from "../../../widgets/ReviewsAdmin/ui/ReviewsAdmin";


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
            <ReviewsAdmin/>
            <NewsBlogsAdmin/>
        </Stack>
    )
}

export default Admin;
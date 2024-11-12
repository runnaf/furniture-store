
import { useGetProductQuery } from "../api/ProductApi"
import { ProductPreview } from "../../ProductPreview/ui/ProductPreview/ProductPreview"
import { RelatedProducts } from "../../RelatedProducts/RelatedProducts"
import { Tabs } from "../../TabsProduct/ui/Tabs/Tabs"
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages"
import { Stack } from "../../../shared/ui/Stack/Stack"
import { useParams } from "react-router"

export const ProductItem = () => {

    const { id } = useParams();
    
    const {data} = useGetProductQuery(id)

    console.log(data)

    return (
        <Stack direction="column" gap="16">
            <ProductPreview />
            <Tabs />
            <RelatedProducts />
            <Advantages />
        </Stack>
        

    )
}

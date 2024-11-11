
import { useGetProductQuery } from "../api/ProductApi"
import { ProductPreview } from "../../ProductPreview/ui/ProductPreview/ProductPreview"
import { RelatedProducts } from "../../RelatedProducts/RelatedProducts"
import { Tabs } from "../../TabsProduct/ui/Tabs/Tabs"
import { Advantages } from "../../../entities/Advantages/ui/Advantages/Advantages"
import { Stack } from "../../../shared/ui/Stack/Stack"

export const ProductItem = () => {

    const {
        data
    } = useGetProductQuery('671a7363e7c54db428bcda25')

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

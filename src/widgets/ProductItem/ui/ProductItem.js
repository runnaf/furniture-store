
import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../api/ProductApi";
import { ProductPreview } from "../../ProductPreview/ui/ProductPreview/ProductPreview";
import { RelatedProducts } from "../../RelatedProducts/RelatedProducts";
import { Tabs } from "../../TabsProduct/ui/Tabs/Tabs";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { routes } from "../../../app/routes/lib/data";

export const ProductItem = () => {
    const { id } = useParams();
  
    const { data, isLoading, error } = useGetProductByIdQuery(id);

    if (isLoading) return //TODO - лоадер или скелетоны надо будет сделать, пока данные не загружены с бэкенда

    if (error) return //TODO - сообщение об ошибке
    
    return (
        <Stack direction="column" gap="75">
            <SectionTitle>
                <Breadcrumbs 
                    routes={routes} 
                    isProduct={true} 
                    name={data.name} 
                />
            </SectionTitle>
            <ProductPreview data={data} />
            <Tabs data={data}/>
            <RelatedProducts />
        </Stack>
    )
}

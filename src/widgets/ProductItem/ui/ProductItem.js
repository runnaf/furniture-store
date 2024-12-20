
import { useNavigate, useParams } from "react-router";
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
    console.log(data)
    const navigate = useNavigate();

    if (error) {
        navigate('/not-found');
    }
    
    return (
        <Stack direction="column" gap="75">
            <SectionTitle>
                <Breadcrumbs 
                    routes={routes} 
                    isProduct={true} 
                    name={data.name} 
                />
            </SectionTitle>
            <ProductPreview 
                data={data} 
                isLoading={isLoading} 
                skeletons={4} 
            />
            <Tabs data={data}/>
            <RelatedProducts />
        </Stack>
    )
}

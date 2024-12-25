import { useNavigate, useParams } from "react-router";
import { useGetProductByIdQuery } from "../api/ProductApi";
import { ProductPreview } from "../../ProductPreview/ui/ProductPreview/ProductPreview";
import { RelatedProducts } from "../../RelatedProducts/RelatedProducts";
import { Tabs } from "../../TabsProduct/ui/Tabs/Tabs";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { SectionTitle } from "../../../entities/SectionTitle/ui/SectionTitle";
import { Breadcrumbs } from "../../../entities/BreadCrumbs/ui/BreadCrumbs";
import { routes } from "../../../app/routes/lib/data";
import { Loader } from "../../../shared/ui/Loader/Loader";

export const ProductItem = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetProductByIdQuery(id);
    const navigate = useNavigate()

    if(isLoading) return <Loader/>

    if (error) {
        navigate('/not-found')
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
                skeletons={4} 
            />
            <Tabs data={data}/>
            <RelatedProducts />
        </Stack>
    )
}

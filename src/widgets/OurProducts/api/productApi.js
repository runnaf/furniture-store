import { api } from "../../../shared/api/api";
import { endpoints } from "../../../shared/api/endpoints";
import { createApiConfig } from "../../../shared/api/helpers";
import { createQueryString } from "./queryUtils";

const PRODUCT_TAG = [{ type: 'Product', id: 'Products'}];

const productApi = api.injectEndpoints({
    endpoints:(build) => ({
        getAllProducts: build.query({
            query: (params) => createApiConfig(
                'GET', 
                `${endpoints.lists.shop}/${params.limit}/${params.page}?${createQueryString(params.filters)}`
            ),
            providesTags: () => PRODUCT_TAG,
        }),
        getProduct: build.query({
            query: ({ id }) => createApiConfig(
                'GET',
                `${endpoints.lists.shop}/${id}`
            ),
            providesTags: () => PRODUCT_TAG,
        }),
        addProduct: build.mutation({
            query: (body) => createApiConfig(
                'POST',
                `${endpoints.lists.shop}/product`,
                body
            ),
            invalidatesTags: PRODUCT_TAG,
        }),
        editProduct: build.mutation({
            query: (body) => createApiConfig(
                'PUT',
                `${endpoints.lists.shop}/${body.id}`,
                body
            ),
            invalidatesTags: PRODUCT_TAG,
        }),
        deleteProduct: build.mutation({
            query: ({ id }) => createApiConfig(
                'DELETE',
                `${endpoints.lists.shop}/${id}`
            ),
            invalidatesTags: PRODUCT_TAG,
        })
    })
})

export const {
    useGetProductQuery,
    useGetAllProductsQuery,
    useLazyGetAllProductsQuery,
    useAddProductMutation,
    useEditProductMutation,
    useDeleteProductMutation
} = productApi
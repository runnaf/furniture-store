import { api } from "../../../shared/api/api";
import { createApiConfig } from "../../../shared/api/helpers";

const PRODUCT_TAG = [{type: 'Product', id: 'Product'}];

const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProduct: (id) => createApiConfig('GET', `/shop/${id}`),
        providesTags: () => PRODUCT_TAG,
    })
})

export const {
    useGetProductQuery
} = productApi;
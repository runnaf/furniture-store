import { api } from "../../../shared/api/api";
import { endpoints } from "../../../shared/api/endpoints";
import { createApiConfig } from "../../../shared/api/helpers";

const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProduct: build.query({
            query: (id) => createApiConfig('GET', `${endpoints.lists.shop}/${id}`),
        }) 
    })
})

export const {
    useGetProductQuery
} = productApi;
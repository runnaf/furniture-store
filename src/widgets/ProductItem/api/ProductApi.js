import { api } from "../../../shared/api/api";
import { endpoints } from "../../../shared/api/endpoints";
import { createApiConfig } from "../../../shared/api/helpers";

const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProductById: build.query({
            query: (id) => createApiConfig('GET', `${endpoints.lists.shop}/${id}`),
        }),
        getReviewsByProductId: build.query({
            query: (id) => createApiConfig('GET', `${endpoints.lists.reviews}/${id}`)
        }) 
    })
})

export const {
    useGetProductByIdQuery,
    useGetReviewsByProductIdQuery,
} = productApi;
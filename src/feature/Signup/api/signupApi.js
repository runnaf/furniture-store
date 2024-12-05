import { api } from "../../../shared/api/api";
import { endpoints } from "../../../shared/api/endpoints";
import { createApiConfig } from "../../../shared/api/helpers";
import { createQueryString } from "./queryUtils";

const NEW_USER_TAG = [{ type: 'New_User', id: 'New_User'}];

const productApi = api.injectEndpoints({
    endpoints:(build) => ({
        getAllProducts: build.query({
            query: (params) => createApiConfig(
                'GET', 
                `${endpoints.lists.shop}/${params.limit}/${params.page}?${createQueryString(params.filters)}`
            ),
            providesTags: () => NEW_USER_TAG,
        }),
        getProduct: build.query({
            query: ({ id }) => createApiConfig(
                'GET',
                `${endpoints.lists.shop}/${id}`
            ),
            providesTags: () => NEW_USER_TAG,
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
            invalidatesTags: NEW_USER_TAG,
        }),
        deleteProduct: build.mutation({
            query: ({ id }) => createApiConfig(
                'DELETE',
                `${endpoints.lists.shop}/${id}`
            ),
            invalidatesTags: NEW_USER_TAG,
        })
    })
})


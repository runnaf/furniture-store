import { api } from "../../../shared/api/api";
import { endpoints } from "../../../shared/api/endpoints";
import { createApiConfig } from "../../../shared/api/helpers";

const CART_TAG = [{ type: 'Cart', id: 'Cart'}];

const cartApi = api.injectEndpoints({
    endpoints:(build) => ({
        getCart: build.query({
            query: ({ limit, page }) => createApiConfig(
                'GET', 
                `${endpoints.lists.cart}/${limit}/${page}`
            ),
            providesTags: () => CART_TAG,
        }),
        addInCart: build.mutation({
            query: (body) => createApiConfig(
                'POST',
                endpoints.lists.cart,
                body
            ),
            invalidatesTags: CART_TAG,
        }),
        editCartItem: build.mutation({
            query: (body) => createApiConfig(
                'PUT',
                `${endpoints.lists.cart}/${body.id}`,
                body
            ),
            invalidatesTags: CART_TAG,
        }),
        deleteFromCart: build.mutation({
            query: ({ id }) => createApiConfig(
                'DELETE',
                `${endpoints.lists.cart}/${id}`
            ),
            invalidatesTags: CART_TAG,
        })
    })
})

export const {
    useGetCartQuery,
    useLazyGetCartQuery,
    useAddInCartMutation,
    useEditCartItemMutation,
    useDeleteFromCartMutation,
} = cartApi
import { api } from "../../../shared/api/api";
import { endpoints } from "../../../shared/api/endpoints";
import { createApiConfig } from "../../../shared/api/helpers";

const WISH_LIST_TAG = [{ type: 'Wish_List', id: 'Wish_List'}];

const wishListApi = api.injectEndpoints({
    endpoints:(build) => ({
        getWishList: build.query({
            query: ({ limit, page }) => createApiConfig(
                'GET', 
                `${endpoints.lists.wish_list}/${limit}/${page}`
            ),
            providesTags: () => WISH_LIST_TAG,
        }),
        addInWishList: build.mutation({
            query: (body) => createApiConfig(
                'POST',
                endpoints.lists.wish_list,
                body
            ),
            invalidatesTags: WISH_LIST_TAG,
        }),
        deleteFromWishList: build.mutation({
            query: ({ id }) => createApiConfig(
                'DELETE',
                `${endpoints.lists.wish_list}/${id}`
            ),
            invalidatesTags: WISH_LIST_TAG,
        })
    })
})

export const {
    useGetWishListQuery,
    useLazyGetWishListQuery,
    useAddInWishListMutation,
    useDeleteFromWishListMutation
} = wishListApi
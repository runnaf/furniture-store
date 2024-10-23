import { createApi } from "@reduxjs/toolkit/query";
import { baseQuery } from "../../../app/redux/services/api";

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: baseQuery,
    tagTypes: ['Blog'],
    endpoints:(build) => ({
        getAllNews: build.query({
            query: (limit = 9) => ({
                url: '/blog',
                params: { limit }
            }),
            providesTags: (result) =>
                result ? 
            [...result.map(({ id }) => ({ type: 'Blog', id })), 'Blog'] 
            : ['Blog']
        }),
        addNews: build.mutation({
            query: (body) => ({
                url: '/blog',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Blog']
        }),
        editNews: build.mutation({
            query: (body) => ({
                url: `/blog/${body.id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Blog', id: arg.id}]
        }),
        deleteNews: build.mutation({
            query: (body) => ({
                url: `/blog/${body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Blog', id: arg.id}]
        })
    })
})

export const {
    useGetAllNewsQuery,
    useAddNewsMutation,
    useEditNewsMutation,
    useDeleteNewsMutation,
} = blogApi;
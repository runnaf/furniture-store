import { api } from '../../../shared/api/api';
import { endpoints } from '../../../shared/api/endpoints';

const BLOG_TAG = [{ type: 'Blog', id: 'Blog'}];


const blogApi = api.injectEndpoints({
    endpoints:(build) => ({
        getAllNews: build.query({
            query: ({limit, page}) => ({
                url: `${endpoints.lists.blog}/${limit}/${page}`
            }),
            providesTags: () => BLOG_TAG,
        }),
        addNews: build.mutation({
            query: (body) => ({
                url: '/blog',
                method: 'POST',
                body,
            }),
            invalidatesTags: BLOG_TAG,
        }),
        editNews: build.mutation({
            query: (body) => ({
                url: `/blog/${body.id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: BLOG_TAG,
        }),
        deleteNews: build.mutation({
            query: (body) => ({
                url: `/blog/${body.id}`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags: BLOG_TAG,
        })
    })
})


export const {
    useGetAllNewsQuery,
    useLazyGetAllNewsQuery,
    useAddNewsMutation,
    useEditNewsMutation,
    useDeleteNewsMutation
} = blogApi;
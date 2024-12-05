import { api } from "../../../shared/api/api";
import { endpoints } from "../../../shared/api/endpoints";
import { createApiConfig } from "../../../shared/api/helpers";

const USER_TAG = [{ type: 'User', id: 'Users'}];

const loginApi = api.injectEndpoints({
    endpoints:(build) => ({
        login: build.mutation({
            query: (body) => createApiConfig(
                'POST', 
                `${endpoints.lists.login}`,
                body
            ),
            providesTags: () => USER_TAG,
        }),
        resetPassword: build.mutation({
            query: (body) => createApiConfig(
                'PUT',
                `${endpoints.lists.reset_password}`,
                body
            ),
            invalidatesTags: USER_TAG,
        }),
        refreshPassword: build.mutation({
            query: (body) => createApiConfig(
                'PUT',
                `${endpoints.lists.refresh_password}`,
                body
            ),
            invalidatesTags: USER_TAG,
        }),
        logout: build.mutation({
            query: ({ cookies }) => createApiConfig(
                'DELETE',
                `${endpoints.lists.logout}`,
                cookies
            ),
            invalidatesTags: USER_TAG,
        })
    })
})

export const {
    useLoginMutation,
    useResetPasswordMutation,
    useRefreshPasswordMutation,
    useLogoutMutation
} = loginApi


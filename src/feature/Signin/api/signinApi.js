import { api } from "../../../shared/api/api";
import { endpoints } from "../../../shared/api/endpoints";
import { createApiConfig } from "../../../shared/api/helpers";

const USER_TAG = [{ type: 'User', id: 'Users'}];

const loginApi = api.injectEndpoints({
    endpoints:(build) => ({
        registration: build.mutation({
            query: (body) => createApiConfig(
                'POST',
                `${endpoints.user.registration}`,
                body
            ),
            providesTags: () => USER_TAG,
        }),
        login: build.mutation({
            query: (body) => createApiConfig(
                'POST', 
                `${endpoints.user.login}`,
                body
            ),
            providesTags: () => USER_TAG,
        }),
        resetPassword: build.mutation({
            query: (body) => createApiConfig(
                'POST',
                `${endpoints.user.reset_password}`,
                body
            ),
            invalidatesTags: USER_TAG,
        }),
        refreshPassword: build.mutation({
            query: (body) => createApiConfig(
                'PUT',
                `${endpoints.user.refresh_password}`,
                body
            ),
            invalidatesTags: USER_TAG,
        }),
        logout: build.mutation({
            query: ({ cookies }) => createApiConfig(
                'DELETE',
                `${endpoints.user.logout}`,
                cookies
            ),
            invalidatesTags: USER_TAG,
        })
    })
})

export const {
    useRegistrationMutation,
    useLoginMutation,
    useResetPasswordMutation,
    useRefreshPasswordMutation,
    useLogoutMutation
} = loginApi


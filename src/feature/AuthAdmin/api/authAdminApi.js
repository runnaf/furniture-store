import { api } from "../../../shared/api/api";
import { endpoints } from "../../../shared/api/endpoints";
import { createApiConfig } from "../../../shared/api/helpers";

const ADMIN_TAG = [{ type: 'Admin', id: 'Admins'}];

const authApi = api.injectEndpoints({
    endpoints:(build) => ({
        registrationAdmin: build.mutation({
            query: (body) => createApiConfig(
                'POST', 
                `${endpoints.admin.registrationAdmin}`,
                body
            ),
            providesTags: () => ADMIN_TAG,
        }),
        loginAdmin: build.mutation({
            query: (body) => createApiConfig(
                'POST', 
                `${endpoints.admin.loginAdmin}`,
                body
            ),
            providesTags: () => ADMIN_TAG,
        }),
        resetPasswordAdmin: build.mutation({
            query: (body) => createApiConfig(
                'POST',
                `${endpoints.admin.reset_passwordAdmin}`,
                body
            ),
            invalidatesTags: ADMIN_TAG,
        }),
        refreshPasswordAdmin: build.mutation({
            query: (body) => createApiConfig(
                'PUT',
                `${endpoints.admin.refresh_passwordAdmin}`,
                body
            ),
            invalidatesTags: ADMIN_TAG,
        }),
        logoutAdmin: build.mutation({
            query: ({ cookies }) => createApiConfig(
                'DELETE',
                `${endpoints.admin.logoutAdmin}`,
                cookies
            ),
            invalidatesTags: ADMIN_TAG,
        })
    })
})

export const {
    useLoginAdminMutation,
    useResetPasswordAdminMutation,
    useRefreshPasswordAdminMutation,
    useLogoutAdminMutation,
} = authApi

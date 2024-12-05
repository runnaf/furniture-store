import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { apiUrl } from "./endpoints";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
        prepareHeaders: (headers) => {
            const token = Cookies.get('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
        async onError(response, api) {
            if (response?.status === 401) { 
                try {
                    const refreshResponse = await fetch(`${apiUrl}/refresh`, {
                        method: 'GET',
                        credentials: 'include',
                    })
                    if (refreshResponse.ok) {
                        const data = await refreshResponse.json()
                        const newToken = data.accessToken;
                        Cookies.set('authToken', newToken, { secure: true })
                        const retryResponse = await api.retryWithNewHeaders({
                            Authorization: `Bearer ${newToken}`,
                        })
                        return retryResponse;
                    } else {
                        throw new Error('Не удалось обновить токен')
                    }
                } catch (error) {
                    console.error('Ошибка рефреша токена:', error)
                }
            }
        },
    }),
    tagTypes: ['Blog', 'Product', 'Wish_List', 'Cart', 'New_User', 'User'],
    endpoints: (builder) => ({}),
});

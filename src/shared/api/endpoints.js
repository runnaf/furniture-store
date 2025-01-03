const config = {
    develop: 'http://localhost:8000',
};

export const apiUrl = config.develop;

export const endpoints = {
    lists: {
        orders: '/orders',
        reviews: '/reviews',
        blog: '/blog',
        shop: '/shop',
        cart: '/cart',
        wish_list: '/wish-list',
    },
    user: {
        registration: '/registration',
        login: '/login',
        logout: '/logout',
        reset_password: '/reset-password',
        refresh_password: '/refresh-password',
        refresh: '/refresh'
    },
    admin: {
        registrationAdmin: '/registration-admin',
        loginAdmin: '/login-admin',
        logoutAdmin: '/logout-admin',
        reset_passwordAdmin: '/reset-password-admin',
        refresh_passwordAdmin: '/refresh-password-admin',
        refreshAdmin: '/refresh-admin'
    }
}

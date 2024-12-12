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
        auth: '/registration',
        login: '/login',
        logout: '/logout',
        reset_password: '/reset-password',
        refresh_password: '/refresh-password',
        refresh: '/refresh'
    },
    user: '/user'
}

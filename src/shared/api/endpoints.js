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
        wish_list: '/wish_list'
    },
    user: '/user'
}

export const getRouteMain = () => '/';
export const getRouteAdmin = () => '/admin';
export const getRouteAuthAdmin = () => '/auth-admin';
export const getRouteRefreshPasswordAdmin = () => '/refresh-password-admin/:resetToken';
export const getRouteRefreshPasswordUser = () => '/refresh-password/:resetToken';
export const getRouteShop = () => '/shop';
export const getRouteFAQ = () => '/faqs';
export const getRouteCategories = (param) => `/shop${param ? `/${param}` : ''}`;
export const getRouteAbout = () => `/about`;
export const getRouteContact = () => '/contact';
export const getRouteBlog = () => '/blog';
export const getRouteSignin = () => '/login';
export const getRouteSignup = () => '/registration';
export const getRouteProduct = (id) => `/shop/${id}`;
export const getRouteError404 = () => '*'
export const getRouteCart = () => '/cart';
export const getRouteCheckout = () => '/checout';
export const getRouteWishlist = () => '/wishlist';
// export const getRuoteReviews = (id) => `/reviews/${id}`;
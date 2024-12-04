export const getRouteMain = () => '/';
export const getRouteAdmin = () => '/admin';
export const getRouteShop = () => '/shop';
export const getRouteFAQ = () => '/faqs';
export const getRouteCategories = (param) => `/shop${param ? `/${param}` : ''}`;
export const getRouteAbout = () => `/about`;
export const getRouteContact = () => '/contact';
export const getRouteBlog = () => '/blog';
export const getRouteSignin = () => '/signin';
export const getRouteSignup = () => '/signup';
export const getRouteProduct = (id) => `/shop/${id}`;
export const getRouteError404 = () => '*'
export const getRouteCart = () => '/cart';
export const getRouteCheckout = () => '/checout';
// export const getRuoteReviews = (id) => `/reviews/${id}`;
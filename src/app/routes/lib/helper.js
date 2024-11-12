export const getRouteMain = () => '/';
export const getRouteShop = () => '/shop';
export const getRouteFAQ = () => '/faqs';
export const getRouteCategories = (param) => `/shop${param ? `/${param}` : ''}`;
export const getRouteAbout = () => `/about`;
export const getRouteContact = () => '/contact';
export const getRouteBlog = () => '/blog';
export const getRouteSignin = () => '/signin';
export const getRouteSignup = () => '/signup';
export const getRouteProduct = (id, param) => `/shop${param ? `/${param}` : ''}/${id}`;


export const getRouteMain = () => '/';
export const getRouteShop = () => '/shop';
export const getRouteFAQ = () => '/faqs';
export const getRouteCategories = (param) => `/categories${param ? `/${param}` : ''}`;
export const getRouteAbout = () => '/about';
export const getRouteContact = () => '/contact';
export const getRouteBlog = () => '/blog';
export const getRouteSignin = () => '/signin';
export const getRouteSignup = () => '/signup';
export const getRouteProduct = (param, id) => `/shop/categories${param ? `/${param}` : ''}/${id}`;

